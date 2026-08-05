// src/types.ts

export interface Dashboard {
    uid: string;
    title: string;
    tags: string[];
    url: string;
    group?: string;
}

export interface SmartNavigationOptions {
    menuTag: string;
    groupFilter: string;
    layout: 'vertical' | 'horizontal';
    enableKioskMode?: boolean;
    kioskTimeout?: number;
    enableFavorites?: boolean;
    enableAccordion?: boolean;
    expandOnHover?: boolean;
    enableIcons?: boolean;
}
