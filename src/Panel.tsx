// src/Panel.tsx

import React, { useEffect, useState, useMemo } from 'react';
import { PanelProps } from '@grafana/data';
import { ScrollContainer, useTheme2 } from '@grafana/ui';

// Tipler ve Servisler
import { SmartNavigationOptions, Dashboard } from './types';
import { dashboardService } from './DashboardService';

// Kendi oluşturduğumuz UI Bileşenleri
import { SearchBox } from './components/SearchBox';
import { Navigation } from './components/Navigation';
import { useKioskMode } from './hooks/useKioskMode';

interface Props extends PanelProps<SmartNavigationOptions> { }

export const Panel: React.FC<Props> = ({ options, width, height }) => {
    const theme = useTheme2();

    const [dashboards, setDashboards] = useState<Dashboard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const enableKioskMode = options.enableKioskMode ?? true;
    const kioskTimeoutMs = (options.kioskTimeout ?? 30) * 1000;
    const isIdle = useKioskMode(enableKioskMode ? kioskTimeoutMs : 0);

    // Favoriler State
    const [favorites, setFavorites] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('smartnav_favorites');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const toggleFavorite = (uid: string) => {
        setFavorites((prev) => {
            const newFavs = prev.includes(uid) ? prev.filter((id) => id !== uid) : [...prev, uid];
            localStorage.setItem('smartnav_favorites', JSON.stringify(newFavs));
            return newFavs;
        });
    };

    // 1. Verileri Çek
    useEffect(() => {
        const fetchDashboards = async () => {
            setLoading(true);
            try {
                const data = await dashboardService.getDashboards(options.menuTag);
                setDashboards(data);
            } catch (error) {
                console.error("Dashboardlar çekilirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboards();
    }, [options.menuTag]);

    // 2. Filtrele (Grup ve Arama)
    const filteredDashboards = useMemo(() => {
        return dashboards.filter((dash) => {
            // Grup Filtresi
            if (options.groupFilter && dash.group !== options.groupFilter) {
                return false;
            }
            // Arama Filtresi
            if (searchQuery && !dash.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            return true;
        });
    }, [dashboards, options.groupFilter, searchQuery]);

    // 3. Stiller
    const styles = {
        container: {
            width,
            height,
            padding: theme.spacing(2),
            backgroundColor: theme.colors.background.primary,
            transition: enableKioskMode ? 'transform 0.5s ease-in-out' : 'none',
            transform: (enableKioskMode && isIdle) ? 'translateX(-100%)' : 'translateX(0)',
        },
        message: {
            color: theme.colors.text.secondary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }
    };

    // Yükleniyor Durumu
    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.message}>Menü Yükleniyor...</div>
            </div>
        );
    }

    // Ana Render
    return (
        <div style={styles.container}>
            <ScrollContainer>

                {/* Modüler Arama Kutusu */}
                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                {/* Sonuç Yoksa Bilgi Ver, Varsa Menüyü Çiz */}
                {filteredDashboards.length === 0 ? (
                    <div style={styles.message}>
                        Uygun dashboard bulunamadı.
                    </div>
                ) : (
                    <Navigation 
                        dashboards={filteredDashboards} 
                        layout={options.layout || 'vertical'}
                        favorites={options.enableFavorites !== false ? favorites : undefined}
                        toggleFavorite={options.enableFavorites !== false ? toggleFavorite : undefined}
                        enableAccordion={options.enableAccordion !== false}
                        expandOnHover={options.expandOnHover === true}
                        enableIcons={options.enableIcons !== false}
                    />
                )}

            </ScrollContainer>
        </div>
    );
};
