# Smart Navigation Enterprise - User Manual / Kullanım Kılavuzu

*English version is available below.*

---

## 🇹🇷 Türkçe: Kullanım Kılavuzu

**Smart Navigation Enterprise** eklentisi için hazırlanan kapsamlı kullanım kılavuzuna hoş geldiniz. Bu rehber, dinamik navigasyon panelinizi kurmanıza ve yapılandırmanıza yardımcı olacaktır.

### 1. Kurulum ve Temel Kullanım
1. **Paneli Ekleyin:** Grafana'da yeni bir dashboard oluşturun ve görselleştirme listesinden `Smart Navigation Enterprise` panelini seçin.
2. **Dashboard'ları Etiketleyin:** Menüde görünmesini istediğiniz dashboard'ları açın, **Dashboard Settings > Tags** menüsüne gidin ve ortak bir etiket (örneğin `menu`) ekleyip kaydedin.
3. **Paneli Yapılandırın:** Eklentinin sağ taraftaki ayar penceresinden **Menu Tag** kısmına `menu` yazın. Panel otomatik olarak etiketlenen tüm dashboard'ları bulup listeleyecektir.

### 2. Panel Ayarları (Options)
Grafana editör panelinden şu ayarları değiştirebilirsiniz:

- **Menü Düzeni (Layout):** Klasik yan menü için `Dikey (Vertical)`, üst menü çubuğu görünümü için `Yatay (Horizontal)` seçin.
- **Grup Filtresi (Group Filter):** Sadece belirli bir klasöre/gruba ait dashboard'ları göstermek için grup adını buraya yazabilirsiniz. Tüm grupları görmek için boş bırakın.

### 3. Özellikleri Açma / Kapatma (Toggles)
- **Kiosk Modunu Etkinleştir:** Açıldığında, ekranda belirli bir süre fare veya dokunmatik hareketi olmazsa menü otomatik olarak sola kayarak gizlenir. Ekrana tekrar dokunulduğunda hemen geri gelir. Özellikle fabrikalardaki SCADA ekranları veya NOC izleme televizyonları için idealdir.
- **Kiosk Modu Süresi (Saniye):** Kiosk modunun devreye girmesi için geçmesi gereken hareketsizlik süresini belirler (Varsayılan: 30 saniye).
- **Favoriler Özelliği:** Menüdeki her öğenin yanına bir yıldız (⭐) ekler. Kullanıcılar bu yıldıza tıklayarak sık kullandıkları sayfaları en üstteki özel `🌟 FAVORİLER` grubuna sabitleyebilir. Bu ayar kullanıcının tarayıcısında (`localStorage` içinde) saklanır.
- **Akordiyon Menü:** Menü gruplarının tıklanarak açılıp kapanabilmesini sağlar. Sayfa ilk yüklendiğinde yalnızca aktif sayfanın bulunduğu grup açık gelir, böylece kalabalık engellenir.
- **Üzerine Gelince Aç (Hover):** Fareyle (mouse) akordiyon menü başlığının üzerine geldiğinizde tıklamaya gerek kalmadan menüyü otomatik açar. Fareyi çektiğinizde ise yanlışlıkla kapanmaları önlemek için 2 saniye bekler ve sonra zarifçe kapanır. (Akordiyon Menü açıkken kullanılabilir).
- **Etiket Bazlı İkonlar:** Dashboard'larınıza eklediğiniz `icon:<id>` (örneğin `icon:camera`) etiketlerini okuyarak, menüdeki düz ok ikonlarını semantik Grafana ikonlarına dönüştürür. *Detaylar için [ICON_LIST.md](./ICON_LIST.md) dosyasına bakınız.*

### 4. Sıkça Sorulan Sorular (Troubleshooting)
- **Panellerim menüde görünmüyor:** Dashboard'u kaydedip kaydetmediğinizi ve etiketi doğru yazıp yazmadığınızı kontrol edin. Ayrıca kullanıcının o dashboard'u görme yetkisi olmalıdır.
- **Favorilerim siliniyor:** Tarayıcınız Gizli (Incognito) modda olabilir veya yerel depolama (Local Storage) izinleriniz kısıtlanmış olabilir.
- **İkonlar görünmüyor:** Ayarlardan "Etiket Bazlı İkonlar" özelliğinin açık olduğundan emin olun ve ikon ID'sini tam olarak `icon:id` formatında yazdığınızı doğrulayın.

---
<br/>

## 🇬🇧 English: User Manual

Welcome to the comprehensive user manual for **Smart Navigation Enterprise**. This guide will help you install, configure, and get the most out of your dynamic navigation panel in Grafana.

### 1. Basic Setup
1. **Add the Panel:** Create a new dashboard and select `Smart Navigation Enterprise` from the visualization list.
2. **Tag Your Dashboards:** Go to the dashboards you want to appear in the menu. Open their **Dashboard Settings > Tags** and add a specific tag (e.g., `menu`).
3. **Configure the Panel:** In the panel options of Smart Navigation Enterprise, enter `menu` in the **Menu Tag** field. The panel will instantly populate with your tagged dashboards.

### 2. Panel Configuration Options
- **Menu Layout:** Choose between `Vertical (Sidebar)` for traditional side menus, or `Horizontal (Top Navbar)` for top-level navigation.
- **Group Filter:** If you only want to display dashboards belonging to a specific Grafana folder/group, type the group name here. Leave empty to show all groups.

### 3. Feature Toggles
- **Enable Kiosk Mode:** When active, the panel will automatically slide out of view after a set period of inactivity (no mouse movement or touches). This is ideal for wall-mounted NOC displays to maximize screen real estate.
- **Kiosk Mode Timeout (Seconds):** Determines the inactivity duration required before the menu hides itself (Default: 30 seconds).
- **Enable Favorites Feature:** Displays a star icon next to each menu item. Users can click the star to pin dashboards to a persistent `🌟 FAVORITES` group at the top of the menu. Preferences are saved locally in the browser (`localStorage`).
- **Enable Accordion Menu:** Groups will be rendered as collapsible accordions. The group containing the currently viewed dashboard will be automatically expanded on load, while others remain collapsed to save space.
- **Expand on Hover:** When hovered over an accordion group header, the menu smoothly expands without clicking. When the mouse leaves, it waits for a 2-second grace period before elegantly collapsing, preventing accidental closures.
- **Enable Tag-Based Icons:** If enabled, the panel will read dashboard tags (`icon:<id>`) and replace the default arrow icon with specific semantic icons (e.g., a camera icon for dashboards tagged with `icon:camera`). *See [ICON_LIST.md](./ICON_LIST.md) for details.*

### 4. Troubleshooting
- **My dashboard isn't showing up:** Ensure the dashboard is saved, has the correct tag assigned, and that you have the appropriate view permissions.
- **Favorites aren't saving:** Check if your browser is blocking local storage or if you are browsing in strict Incognito/Private mode.
- **Icons are not appearing:** Ensure you have the `Enable Tag-Based Icons` toggle activated, and that your dashboard tags are formatted exactly as `icon:id`.
