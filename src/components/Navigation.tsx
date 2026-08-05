// src/components/Navigation.tsx

import React, { useState, useEffect, useRef } from 'react';
import { useTheme2, Icon } from '@grafana/ui';
import { locationService } from '@grafana/runtime';
import { Dashboard } from '../types';
import { DashboardItem } from './DashboardItem';

interface Props {
    dashboards: Dashboard[];
    layout: 'vertical' | 'horizontal';
    favorites?: string[];
    toggleFavorite?: (uid: string) => void;
    enableAccordion?: boolean;
    expandOnHover?: boolean;
    enableIcons?: boolean;
}

export const Navigation: React.FC<Props> = ({ 
    dashboards, layout, favorites = [], toggleFavorite, 
    enableAccordion = true, expandOnHover = false, enableIcons = true 
}) => {
    const theme = useTheme2();
    const currentPath = locationService.getLocation().pathname;

    const groupedDashboards: Record<string, Dashboard[]> = {};
    
    // Favoriler grubunu en başa ekle
    const favs = dashboards.filter(d => favorites.includes(d.uid));
    if (favs.length > 0) {
        groupedDashboards['🌟 FAVORİLER'] = favs;
    }

    dashboards.forEach((dash) => {
        const groupName = dash.group ? dash.group.toUpperCase() : 'DİĞER';
        if (!groupedDashboards[groupName]) {
            groupedDashboards[groupName] = [];
        }
        groupedDashboards[groupName].push(dash);
    });

    // Akordiyon state'i ve hover zamanlayıcıları
    const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
    const hoverTimeouts = useRef<Record<string, NodeJS.Timeout>>({});

    useEffect(() => {
        // Aktif olan paneli bul ve grubunu açık bırak
        const initialState: Record<string, boolean> = {};
        Object.entries(groupedDashboards).forEach(([groupName, groupDashboards]) => {
            const hasActive = groupDashboards.some(d => currentPath.includes(`/d/${d.uid}`));
            initialState[groupName] = !hasActive; // Aktifse kapalı (collapsed) OLMASIN
        });
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCollapsedGroups(initialState);
        // Sadece dashboards veya yol değiştiğinde tetikle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dashboards, currentPath]);

    const toggleGroup = (groupName: string) => {
        setCollapsedGroups(prev => ({
            ...prev,
            [groupName]: !prev[groupName]
        }));
    };

    // Yatay mı Dikey mi kontrolü
    const isHorizontal = layout === 'horizontal';

    return (
        <div
            style={{
                display: 'flex',
                // Yataysa yan yana (row), dikeyse alt alta (column) diz
                flexDirection: isHorizontal ? 'row' : 'column',
                gap: theme.spacing(3), // Gruplar arası boşluk
                flexWrap: 'wrap', // Ekrana sığmazsa alt satıra geç
            }}
        >
            {Object.entries(groupedDashboards).map(([groupName, groupDashboards]) => {
                const isCollapsed = collapsedGroups[groupName];
                
                return (
                    <div 
                        key={groupName} 
                        style={{ minWidth: isHorizontal ? '150px' : 'auto' }}
                        onMouseEnter={() => {
                            if (enableAccordion && expandOnHover) {
                                // Eğer kapanma için bekleyen bir zamanlayıcı varsa iptal et
                                if (hoverTimeouts.current[groupName]) {
                                    clearTimeout(hoverTimeouts.current[groupName]);
                                    delete hoverTimeouts.current[groupName];
                                }
                                setCollapsedGroups(prev => ({ ...prev, [groupName]: false }));
                            }
                        }}
                        onMouseLeave={() => {
                            if (enableAccordion && expandOnHover) {
                                const hasActive = groupDashboards.some(d => currentPath.includes(`/d/${d.uid}`));
                                if (!hasActive) {
                                    // Menüden çıkınca hemen kapatma, 2 saniye (2000ms) bekle
                                    hoverTimeouts.current[groupName] = setTimeout(() => {
                                        setCollapsedGroups(prev => ({ ...prev, [groupName]: true }));
                                        delete hoverTimeouts.current[groupName];
                                    }, 2000);
                                }
                            }
                        }}
                    >
                        <div
                            onClick={() => {
                                if (enableAccordion) {
                                    toggleGroup(groupName);
                                }
                            }}
                            style={{
                                cursor: enableAccordion ? 'pointer' : 'default',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                color: theme.colors.text.primary,
                                fontWeight: theme.typography.fontWeightBold,
                                marginBottom: theme.spacing(1),
                                letterSpacing: '1px',
                                fontSize: theme.typography.bodySmall.fontSize,
                                borderBottom: isHorizontal ? `1px solid ${theme.colors.border.weak}` : 'none',
                                paddingBottom: isHorizontal ? theme.spacing(0.5) : 0,
                                userSelect: 'none',
                            }}
                        >
                            {groupName}
                            {enableAccordion && <Icon name={isCollapsed ? 'angle-down' : 'angle-up'} />}
                        </div>

                        {(!enableAccordion || !isCollapsed) && (
                            <div style={{ paddingLeft: isHorizontal ? 0 : theme.spacing(1) }}>
                                {groupDashboards.map((dash) => {
                                    const isActive = currentPath.includes(`/d/${dash.uid}`);
                                    const isFav = favorites.includes(dash.uid);
                                    return (
                                        <DashboardItem
                                            key={`${groupName}-${dash.uid}`}
                                            dashboard={dash}
                                            isActive={isActive}
                                            isFavorite={isFav}
                                            toggleFavorite={toggleFavorite}
                                            enableIcons={enableIcons}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
