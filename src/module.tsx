// src/module.ts

import { PanelPlugin } from '@grafana/data';
import { SmartNavigationOptions } from './types';
import { Panel } from './Panel';

export const plugin = new PanelPlugin<SmartNavigationOptions>(Panel)
  .setPanelOptions((builder) => {
    return builder
      .addRadio({
        path: 'layout',
        name: 'Menü Düzeni (Layout)',
        description: 'Menünün ekranda nasıl dizileceğini seçin.',
        defaultValue: 'vertical',
        settings: {
          options: [
            { value: 'vertical', label: 'Dikey (Sol Menü)' },
            { value: 'horizontal', label: 'Yatay (Üst Menü)' },
          ],
        },
      })
      .addTextInput({
        path: 'menuTag',
        name: 'Menu Tag',
        description: 'Sadece bu etikete (tag) sahip dashboardlar menüde listelenir.',
        defaultValue: 'menu',
      })
      .addTextInput({
        path: 'groupFilter',
        name: 'Group Filter',
        description: 'Boş bırakılırsa tüm gruplar gösterilir. (örn: production)',
        defaultValue: '',
      })
      .addBooleanSwitch({
        path: 'enableKioskMode',
        name: 'Kiosk Modunu Etkinleştir',
        description: 'Etkileşimsizlik durumunda menüyü gizler.',
        defaultValue: true,
      })
      .addNumberInput({
        path: 'kioskTimeout',
        name: 'Kiosk Modu Süresi (Saniye)',
        description: 'Menünün gizlenmesi için geçmesi gereken hareketsizlik süresi.',
        defaultValue: 30,
        showIf: (config) => config.enableKioskMode !== false,
      })
      .addBooleanSwitch({
        path: 'enableFavorites',
        name: 'Favoriler Özelliği',
        description: 'Kullanıcıların dashboardları favorilere eklemesine izin verir.',
        defaultValue: true,
      })
      .addBooleanSwitch({
        path: 'enableAccordion',
        name: 'Akordiyon Menü',
        description: 'Grupların açılıp kapanmasını sağlar.',
        defaultValue: true,
      })
      .addBooleanSwitch({
        path: 'expandOnHover',
        name: 'Üzerine Gelince Aç (Hover)',
        description: 'Akordiyon menülerin tıklamak yerine fareyle üzerine gelindiğinde açılmasını sağlar.',
        defaultValue: false,
        showIf: (config) => config.enableAccordion !== false,
      })
      .addBooleanSwitch({
        path: 'enableIcons',
        name: 'Etiket Bazlı İkonlar',
        description: 'Dashboard taglerine göre (örn: kamera, ağ) ikon gösterir.',
        defaultValue: true,
      });
  });
