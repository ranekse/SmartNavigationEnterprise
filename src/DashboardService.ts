// src/DashboardService.ts

import { getBackendSrv } from '@grafana/runtime';
import { Dashboard } from './types';
import { TagParser } from './TagParser';

class DashboardService {
    // Hafızada tutacağımız veriler ve zaman damgası
    private cache: Dashboard[] = [];
    private lastFetch = 0;
    private readonly CACHE_DURATION = 60000; // 60 saniye (milisaniye cinsinden)

    async getDashboards(menuTag: string): Promise<Dashboard[]> {
        const now = Date.now();

        // CACHE KONTROLÜ: Eğer hafızada veri varsa ve üzerinden 60 saniye geçmemişse, hafızadakini gönder.
        if (this.cache.length > 0 && (now - this.lastFetch) < this.CACHE_DURATION) {
            return this.cache;
        }

        // API ÇAĞRISI: Grafana'nın kendi güvenli servisini kullanarak dashboard listesini çekiyoruz.
        const response = await getBackendSrv().get('/api/search', { type: 'dash-db' });

        // VERİYİ İŞLEME: Gelen ham veriyi filtreleyip, kendi oluşturduğumuz Dashboard formatına (types.ts) sokuyoruz.
        const dashboards: Dashboard[] = response
            // 1. Sadece istediğimiz menü etiketine sahip olanları ayıkla
            .filter((item: any) => TagParser.hasMenu(item.tags, menuTag))
            // 2. Kalanları bizim formatımıza çevir
            .map((item: any) => ({
                uid: item.uid,
                title: item.title,
                tags: item.tags || [],
                url: item.url,
                group: TagParser.getGroup(item.tags)
            }));

        // GÜNCELLEME: Çektiğimiz yeni veriyi ve o anki saati hafızaya (cache) yaz.
        this.cache = dashboards;
        this.lastFetch = now;

        return dashboards;
    }
}

// Bu servisi uygulamanın her yerinde tek bir merkezden kullanmak için dışa aktarıyoruz.
export const dashboardService = new DashboardService();
