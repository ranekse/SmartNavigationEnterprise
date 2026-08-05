// src/components/DashboardItem.tsx

import React from 'react';
import { useTheme2, Icon } from '@grafana/ui';
import { locationService } from '@grafana/runtime';
import { Dashboard } from '../types';

interface Props {
    dashboard: Dashboard;
    isActive: boolean;
    isFavorite?: boolean;
    toggleFavorite?: (uid: string) => void;
    enableIcons?: boolean;
}

// Etiketlere göre uygun Grafana ikon adını döndüren yardımcı fonksiyon
const getTagIcon = (tags: string[]) => {
    if (!tags || tags.length === 0) {return null;}
    
    // 1. Dinamik "icon:id" formatını kontrol et (Örn: icon:bolt)
    const explicitIconTag = tags.find(tag => tag.toLowerCase().startsWith('icon:'));
    if (explicitIconTag) {
        return explicitIconTag.substring(5).trim();
    }

    // 2. Geriye dönük uyumluluk: Klasik kelime eşleşmeleri
    const t = tags.map(tag => tag.toLowerCase());
    if (t.some(tag => tag.includes('kamera') || tag.includes('camera'))) {return 'camera';}
    if (t.some(tag => tag.includes('network') || tag.includes('ağ'))) {return 'share-alt';}
    if (t.some(tag => tag.includes('server') || tag.includes('sunucu'))) {return 'server';}
    if (t.some(tag => tag.includes('database') || tag.includes('veritabanı') || tag.includes('db'))) {return 'database';}
    
    return null;
};

export const DashboardItem: React.FC<Props> = ({ dashboard, isActive, isFavorite, toggleFavorite, enableIcons = true }) => {
    const theme = useTheme2();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        locationService.push(`/d/${dashboard.uid}`);
    };

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Linke tıklanmasını engelle
        e.preventDefault();
        if (toggleFavorite) {
            toggleFavorite(dashboard.uid);
        }
    };

    const textColor = isActive ? theme.colors.primary.text : theme.colors.text.secondary;
    const defaultIcon = isActive ? '▶' : '○';
    const customIconName = enableIcons ? getTagIcon(dashboard.tags) : null;

    return (
        <div
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                padding: `${theme.spacing(0.5)} 0`,
                color: textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // İçeriği ve yıldızı iki uca yay
                fontWeight: isActive ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
                transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.text.primary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {customIconName ? (
                    <Icon name={customIconName as any} size="sm" style={{ marginRight: theme.spacing(1) }} />
                ) : (
                    <span style={{ marginRight: theme.spacing(1), fontSize: '10px' }}>
                        {defaultIcon}
                    </span>
                )}
                {dashboard.title}
            </div>

            {toggleFavorite && (
                <div 
                    onClick={handleFavoriteClick} 
                    style={{ padding: '0 4px', display: 'flex', alignItems: 'center' }}
                    title="Favorilere Ekle / Çıkar"
                >
                    <Icon 
                        name="star" 
                        style={{ 
                            color: isFavorite ? theme.colors.warning.main : theme.colors.text.disabled,
                            transition: 'color 0.2s ease'
                        }} 
                    />
                </div>
            )}
        </div>
    );
};
