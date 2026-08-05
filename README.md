# Smart Navigation Enterprise Panel

*English version is available below.*

---

## 🇹🇷 Türkçe: Smart Navigation Enterprise

Smart Navigation Enterprise, Grafana için geliştirilmiş güçlü, dinamik ve etiket (tag) tabanlı bir menü panelidir. Dashboard bağlantılarını manuel olarak yönetme derdine son verir ve tamamen otomatik bir navigasyon sistemi kurmanızı sağlar.

![Smart Navigation Enterprise](src/img/logo.svg)

### 🌟 Temel Özellikler

- **Etiket (Tag) Tabanlı Yönlendirme:** Belirli bir etikete sahip (varsayılan: `menu`) tüm dashboard'ları otomatik bulur ve menüde listeler.
- **Akordiyon Gruplar:** Dashboard'lar, klasör (group) özelliklerine göre otomatik olarak klasörlenir. Sadece kullanıcının bulunduğu sayfanın klasörü açık gelir, diğerleri kapalı kalır.
- **Favoriler Sistemi (Kişiselleştirilmiş):** Kullanıcılar sık kullandıkları panellerin yanındaki yıldız ikonuna tıklayarak onları en üstteki `🌟 FAVORİLER` grubuna sabitleyebilir. Bu veriler yerel tarayıcıda (`localStorage`) tutulur.
- **Kiosk Modu (Otomatik Gizlenme):** Ekranda belirli bir süre (dinamik olarak ayarlanabilir, örn: 30sn) etkileşim olmazsa menü sola doğru kayarak kendini gizler. Dokunmatik SCADA veya fabrika ekranları için idealdir.
- **Dinamik İkonografi:** Dashboard'larınıza eklediğiniz etiketleri okuyarak menüdeki düz ok simgelerini endüstriyel ikonlara çevirir.
- **Gelişmiş UX (Kullanıcı Deneyimi):** Akordiyon menüler tıklamanın yanı sıra fareyle "Üzerine Gelince Aç (Hover)" özelliğini destekler ve yanlışlıkla kapanmaları önlemek için akıllı bir 2 saniyelik gecikmeye sahiptir.
- **Esnek Düzen:** Dikey (Sol Menü) veya Yatay (Üst Menü) modlarını destekler.

### 📚 Dokümantasyon ve Rehberler

Eklentiyi nasıl kuracağınız, nasıl yapılandıracağınız ve tüm özellikleri hakkında detaylı bilgi için lütfen aşağıdaki dokümanlara göz atın:

- **[Kullanım Kılavuzu / User Manual](./USER_MANUAL.md):** Panel kurulumu, Kiosk modu, Favoriler sistemi ve tüm ayarların detaylı açıklaması.
- **[İkon Listesi / Iconography Guide](./ICON_LIST.md):** `icon:id` formatıyla kullanabileceğiniz **100'den fazla endüstriyel ikonun listesi** ve kullanım rehberi.

### ⚙️ Sistem Gereksinimleri
- Grafana >= 10.0.0

### 🛠️ Kaynaktan Derleme
```bash
npm install
npm run build
```

---
<br/>

## 🇬🇧 English: Smart Navigation Enterprise

Smart Navigation Enterprise is a powerful, dynamic, and tag-based navigation panel plugin for Grafana. It allows you to build highly customizable and automated menus across your dashboards without manual link management.

![Smart Navigation Enterprise](src/img/logo.svg)

### 🌟 Key Features

- **Tag-Based Routing:** Automatically fetches and lists dashboards that share a specific tag (default: `menu`), keeping your navigation always up to date.
- **Accordion Groups:** Dashboards are logically grouped based on their group attribute. Menus are collapsible, and the group of the currently active dashboard is automatically expanded on load.
- **Favorites System:** Users can pin their most visited dashboards to a special `🌟 FAVORITES` group at the top of the menu using the star icon. Preferences are saved locally in the browser (`localStorage`).
- **Kiosk Mode (Auto-Hide):** Ideal for touchscreens, factory floors, and NOC (Network Operations Center) displays. If enabled, the menu will smoothly slide out of view after a customizable period of inactivity and instantly reappear upon interaction.
- **Tag-Based Iconography:** Automatically assigns specific SVG icons to your dashboard menu items based on their Grafana tags.
- **Enhanced UX:** Accordion menus support an "Expand on Hover" feature with a smart 2-second delay to prevent accidental closures.
- **Layout Flexibility:** Supports both Vertical (Sidebar) and Horizontal (Top Navbar) layouts.

### 📚 Documentation

For detailed instructions on how to set up, configure, and get the most out of Smart Navigation Enterprise, please refer to our dedicated guides:

- **[User Manual](./USER_MANUAL.md):** Complete guide on panel setup, configuration options, Kiosk mode, and the Favorites system.
- **[Iconography Guide](./ICON_LIST.md):** A comprehensive list of **over 100 industrial tag-based icons**, their trigger words, and instructions on how to use them.

### ⚙️ Requirements
- Grafana >= 10.0.0

### 🛠️ Building from Source

If you want to modify this plugin and build it from source:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the plugin:
   ```bash
   npm run build
   ```
3. Move the `dist` folder to your Grafana `plugins` directory and restart Grafana.
