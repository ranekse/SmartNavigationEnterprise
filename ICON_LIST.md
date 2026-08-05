# 🎨 Smart Navigation Enterprise - Iconography Guide / İkonografi Rehberi

*English version is available below.*

---

## 🇹🇷 Türkçe: İkonografi Rehberi

Smart Navigation Enterprise, dashboard etiketlerini (tag) okuyarak menülerde otomatik ikonlar oluşturur. 

### İkon Nasıl Eklenir?
Grafana dashboard ayarlarında **"Tags"** (Etiketler) bölümüne `icon:` önekiyle istediğiniz ikonun ID'sini yazmanız yeterlidir. 
Örneğin; bir sunucu (server) dashboard'unuz varsa, etiket olarak `icon:server` yazıp kaydettiğinizde menüde otomatik olarak sunucu ikonu belirecektir.

### 🏭 Endüstriyel Alanda Kullanılabilecek 100+ İkon Listesi

Aşağıdaki ikon ID'lerini `icon:<id>` formatında Grafana etiketlerinize ekleyebilirsiniz.

#### ⚡ Enerji ve Güç Sistemleri (Energy & Power)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:bolt` | ⚡ | Elektrik / Şimşek | Enerji tüketimi, trafo merkezleri, yüksek gerilim. |
| `icon:power` | ⏻ | Güç / Aç-Kapat | Güç durumu, UPS, jeneratörler. |
| `icon:plug` | 🔌 | Fiş / Priz | Şebeke bağlantıları, elektrik beslemeleri. |
| `icon:battery-full` | 🔋 | Dolu Batarya | Batarya seviyeleri, enerji depolama sistemleri. |
| `icon:battery-empty` | 🪫 | Boş Batarya | Düşük şarj uyarıları, batarya döngüleri. |
| `icon:sun` | ☀️ | Güneş | Güneş enerjisi (Solar/GES) izleme. |
| `icon:wind` | 💨 | Rüzgar | Rüzgar türbinleri (RES) ve fanlar. |

#### 🏭 Fabrika, Otomasyon ve Üretim (Manufacturing & Automation)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:industry` | 🏭 | Fabrika | Üretim tesisleri, fabrika genel durum ekranları. |
| `icon:cogs` | ⚙️ | Dişliler / Çarklar | Üretim bantları, mekanik sistemler, motorlar. |
| `icon:cog` | 🔩 | Tek Dişli / Ayar | Makine ayarları, otomasyon konfigürasyonları. |
| `icon:wrench` | 🔧 | İngiliz Anahtarı | Bakım, onarım, arıza takip (Maintenance). |
| `icon:tachometer-fast` | ⏱️ | Hız Göstergesi | Makine hızı, OEE metrikleri, RPM izleme. |
| `icon:box` | 📦 | Kutu | Depo yönetimi, lojistik, stok durumu. |
| `icon:truck` | 🚚 | Kamyon / Lojistik | Filo yönetimi, sevkiyat, taşıma araçları. |
| `icon:pallet` | 🪚 | Palet | Mal kabul, depo yerleşimi. |
| `icon:weight` | ⚖️ | Ağırlık / Tartı | Kantar verileri, tartım istasyonları. |
| `icon:robot` | 🤖 | Robot | Robotik kollar, otonom sistemler (AGV). |
| `icon:sitemap` | 🔀 | Akış Şeması | PLC ağaç yapısı, proses akış şemaları. |
| `icon:microchip` | 🪛 | Çip / Devre | Elektronik kontrol üniteleri (ECU). |

#### 🌡️ Çevre ve İklimlendirme (Environment & HVAC)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:thermometer` | 🌡️ | Termometre | Isı, sıcaklık sensörleri, fırınlar, soğuk odalar. |
| `icon:snowflake` | ❄️ | Kar Tanesi | Soğutma sistemleri, chiller, soğuk hava depoları. |
| `icon:fire` | 🔥 | Ateş / Alev | Isıtma sistemleri, kazanlar, yanma odaları. |
| `icon:water` | 🌊 | Su / Damla | Su tüketimi, hidrolojik veriler, pompa istasyonları. |
| `icon:tint` | 💧 | Damla | Yağlama, sıvı seviye kontrolleri, nem. |
| `icon:fan` | 🌀 | Vantilatör / Fan | Havalandırma, HVAC, iklimlendirme sistemleri. |

#### 🛡️ Güvenlik, İş Sağlığı ve Alarmlar (Security, HSE & Alarms)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:shield` | 🛡️ | Kalkan | Tesis güvenliği, erişim kontrolleri. |
| `icon:camera` | 📷 | Kamera | CCTV izleme, fabrika güvenlik kameraları. |
| `icon:bell` | 🔔 | Zil / Çan | Alarm merkezleri, aktif uyarı panelleri. |
| `icon:exclamation-triangle` | ⚠️ | Uyarı / Dikkat | Kritik arızalar, acil durum sistemleri. |
| `icon:lock` | 🔒 | Kapalı Kilit | Kilitli alanlar, yetkilendirilmiş erişim noktaları. |
| `icon:unlock` | 🔓 | Açık Kilit | Geçiş kontrol sistemleri. |
| `icon:heartbeat` | 💓 | Kalp Atışı / Nabız | Makine can damarı (healthcheck), işçi sağlığı. |
| `icon:hard-hat` | 🪖 | Baret | İş sağlığı ve güvenliği (İSG) ihlal panelleri. |
| `icon:eye` | 👁️ | Göz | Gözlem noktaları, kalite kontrol kameraları. |

#### 🖧 IT, Ağ ve Veri Merkezi (IT, Network & Datacenter)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:server` | 🖧 | Sunucu (Server) | Fiziksel ve sanal sunucu metrikleri. |
| `icon:database` | 🗄️ | Veritabanı | Veritabanı okuma/yazma, SQL durumları. |
| `icon:share-alt` | 🔗 | Ağ Bağlantısı | Switch, router, ağ topolojisi. |
| `icon:wifi` | 📶 | Kablosuz | Endüstriyel kablosuz cihazlar, Wi-Fi çekim gücü. |
| `icon:cloud` | ☁️ | Bulut | Bulut sunucu yedeklemeleri, AWS/Azure bağlantıları. |
| `icon:desktop` | 🖥️ | Monitör / PC | SCADA bilgisayarları, operatör panelleri. |
| `icon:laptop` | 💻 | Dizüstü | Taşınabilir test cihazları. |
| `icon:hdd` | 💽 | Sabit Disk | Depolama birimleri, NAS/SAN kapasiteleri. |
| `icon:sitemap` | 🕸️ | Ağ Haritası | IT altyapı şemaları. |
| `icon:microchip` | 📟 | İşlemci | CPU sıcaklıkları, donanım kaynakları. |

#### 📊 Veri, Raporlama ve Analiz (Data, Reporting & Analytics)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:chart-line` | 📈 | Çizgi Grafik | Trend analizleri, üretim geçmişi. |
| `icon:chart-bar` | 📊 | Çubuk Grafik | Vardiya bazlı karşılaştırmalar, üretim adetleri. |
| `icon:chart-pie` | 🥧 | Pasta Grafik | Oransal dağılımlar, duruş nedenleri. |
| `icon:table` | 📋 | Tablo | Veri günlükleri, log kayıtları, ham veriler. |
| `icon:file-alt` | 📄 | Belge | Vardiya raporları, bakım dokümanları. |
| `icon:clipboard` | 📝 | Pano | Kalite kontrol formları, check-list'ler. |
| `icon:calculator` | 🧮 | Hesap Makinesi | Maliyet, fire hesaplamaları. |
| `icon:history` | 🕒 | Tarihçe / Saat | Geçmişe dönük analiz, tarihsel veriler. |
| `icon:search` | 🔍 | Büyüteç | Detaylı inceleme, log arama. |

#### 🗺️ Konum ve Tesis Yönetimi (Location & Facility)
| İkon ID (Tag) | Önizleme | Açıklama | Kullanım Alanı |
|:---|:---:|:---|:---|
| `icon:map-marker` | 📍 | Harita İşareti | GPS takibi, araç veya personel konumu. |
| `icon:building` | 🏢 | Bina / Tesis | Genel merkez, depo binaları. |
| `icon:home-alt` | 🏠 | Ev / Ana Ekran | Tesis ana izleme ekranı, genel durum. |
| `icon:door-open` | 🚪 | Açık Kapı | Giriş çıkış noktaları, turnikeler. |

#### Diğer / Genel Grafana İkonları (General)
*(Aşağıdaki ikonları da `icon:ID` şeklinde kullanabilirsiniz)*
`apps`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `book`, `bug`, `calendar-alt`, `channel-add`, `check`, `circle`, `clock-nine`, `copy`, `cube`, `dashboard`, `document-info`, `download-alt`, `edit`, `envelope`, `exchange-alt`, `eye-slash`, `favorite`, `file-blank`, `filter`, `folder`, `folder-open`, `folder-plus`, `forward`, `import`, `info-circle`, `key-skeleton-alt`, `link`, `list-ul`, `minus`, `mobile-android`, `palette`, `panel-add`, `pause`, `pen`, `percentage`, `play`, `plus`, `plus-circle`, `plus-square`, `question-circle`, `repeat`, `rocket`, `save`, `search-minus`, `search-plus`, `sign-in-alt`, `sign-out-alt`, `signal`, `slack`, `slider-v`, `sort-amount-down`, `square-shape`, `star`, `step-backward`, `step-forward`, `sync`, `tag-alt`, `times`, `trash-alt`, `upload`, `user`, `users-alt`.

---
<br/>

## 🇬🇧 English: Iconography Guide

Smart Navigation Enterprise creates automatic icons in menus by reading dashboard tags.

### How to Add an Icon?
In your Grafana dashboard settings, go to the **"Tags"** section and simply type the ID of the icon you want with the `icon:` prefix. 
For example, if you have a server dashboard, typing `icon:server` as a tag and saving it will automatically display a server icon in the menu.

### 🏭 100+ Icon List for Industrial Use Cases

You can add the following icon IDs to your Grafana tags in the `icon:<id>` format.

#### ⚡ Energy & Power
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:bolt` | ⚡ | Lightning / Electricity | Energy consumption, substations, high voltage. |
| `icon:power` | ⏻ | Power On/Off | Power status, UPS, generators. |
| `icon:plug` | 🔌 | Plug | Grid connections, power supplies. |
| `icon:battery-full` | 🔋 | Full Battery | Battery levels, energy storage systems (BESS). |
| `icon:battery-empty` | 🪫 | Empty Battery | Low charge warnings, battery cycles. |
| `icon:sun` | ☀️ | Sun | Solar energy (PV) monitoring. |
| `icon:wind` | 💨 | Wind | Wind turbines and large fans. |

#### 🏭 Manufacturing & Automation
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:industry` | 🏭 | Factory | Production facilities, plant overviews. |
| `icon:cogs` | ⚙️ | Multiple Gears | Production lines, mechanical systems, motors. |
| `icon:cog` | 🔩 | Single Gear | Machine settings, automation configs. |
| `icon:wrench` | 🔧 | Wrench | Maintenance, repair, breakdown tracking. |
| `icon:tachometer-fast` | ⏱️ | Speedometer | Machine speed, OEE metrics, RPM tracking. |
| `icon:box` | 📦 | Box | Warehouse management, logistics, stock status. |
| `icon:truck` | 🚚 | Truck | Fleet management, shipping, transport vehicles. |
| `icon:pallet` | 🪚 | Pallet | Goods receipt, warehouse layout. |
| `icon:weight` | ⚖️ | Weight / Scale | Weighbridge data, weighing stations. |
| `icon:robot` | 🤖 | Robot | Robotic arms, autonomous systems (AGV). |
| `icon:sitemap` | 🔀 | Flowchart | PLC tree structure, process flowcharts. |
| `icon:microchip` | 🪛 | Chip / Circuit | Electronic control units (ECU). |

#### 🌡️ Environment & HVAC
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:thermometer` | 🌡️ | Thermometer | Heat, temperature sensors, ovens, cold rooms. |
| `icon:snowflake` | ❄️ | Snowflake | Cooling systems, chillers, cold storage. |
| `icon:fire` | 🔥 | Fire / Flame | Heating systems, boilers, combustion chambers. |
| `icon:water` | 🌊 | Water / Drop | Water consumption, hydrology data, pump stations. |
| `icon:tint` | 💧 | Tint / Droplet | Lubrication, fluid level checks, humidity. |
| `icon:fan` | 🌀 | Fan | Ventilation, HVAC, air conditioning systems. |

#### 🛡️ Security, HSE & Alarms
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:shield` | 🛡️ | Shield | Facility security, access controls. |
| `icon:camera` | 📷 | Camera | CCTV monitoring, factory security cameras. |
| `icon:bell` | 🔔 | Bell | Alarm centers, active warning panels. |
| `icon:exclamation-triangle` | ⚠️ | Warning | Critical failures, emergency systems. |
| `icon:lock` | 🔒 | Locked | Locked areas, authorized access points. |
| `icon:unlock` | 🔓 | Unlocked | Access control systems. |
| `icon:heartbeat` | 💓 | Heartbeat | Machine healthcheck, worker health. |
| `icon:hard-hat` | 🪖 | Hard Hat | Occupational Health and Safety (HSE) violations. |
| `icon:eye` | 👁️ | Eye | Observation points, quality control cameras. |

#### 🖧 IT, Network & Datacenter
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:server` | 🖧 | Server | Physical and virtual server metrics. |
| `icon:database` | 🗄️ | Database | Database read/writes, SQL status. |
| `icon:share-alt` | 🔗 | Network | Switch, router, network topology. |
| `icon:wifi` | 📶 | Wireless | Industrial wireless devices, Wi-Fi signal strength. |
| `icon:cloud` | ☁️ | Cloud | Cloud server backups, AWS/Azure connections. |
| `icon:desktop` | 🖥️ | Monitor / PC | SCADA computers, operator panels. |
| `icon:laptop` | 💻 | Laptop | Portable test equipment. |
| `icon:hdd` | 💽 | Hard Disk | Storage units, NAS/SAN capacities. |

#### 📊 Data, Reporting & Analytics
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:chart-line` | 📈 | Line Chart | Trend analysis, production history. |
| `icon:chart-bar` | 📊 | Bar Chart | Shift comparisons, production quantities. |
| `icon:chart-pie` | 🥧 | Pie Chart | Proportional distributions, downtime reasons. |
| `icon:table` | 📋 | Table | Data logs, raw records. |
| `icon:file-alt` | 📄 | Document | Shift reports, maintenance documents. |
| `icon:clipboard` | 📝 | Clipboard | Quality control forms, checklists. |
| `icon:calculator` | 🧮 | Calculator | Cost, scrap calculations. |
| `icon:history` | 🕒 | History / Clock | Historical analysis, past data. |
| `icon:search` | 🔍 | Magnifying Glass | Detailed inspection, log search. |

#### 🗺️ Location & Facility
| Icon ID (Tag) | Preview | Description | Usage Context |
|:---|:---:|:---|:---|
| `icon:map-marker` | 📍 | Map Marker | GPS tracking, vehicle or personnel location. |
| `icon:building` | 🏢 | Building | Headquarters, warehouse buildings. |
| `icon:home-alt` | 🏠 | Home | Facility main monitoring screen, general status. |
| `icon:door-open` | 🚪 | Open Door | Entry/exit points, turnstiles. |

#### Other General Grafana Icons
*(You can also use the following icons in the `icon:ID` format)*
`apps`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `book`, `bug`, `calendar-alt`, `channel-add`, `check`, `circle`, `clock-nine`, `copy`, `cube`, `dashboard`, `document-info`, `download-alt`, `edit`, `envelope`, `exchange-alt`, `eye-slash`, `favorite`, `file-blank`, `filter`, `folder`, `folder-open`, `folder-plus`, `forward`, `import`, `info-circle`, `key-skeleton-alt`, `link`, `list-ul`, `minus`, `mobile-android`, `palette`, `panel-add`, `pause`, `pen`, `percentage`, `play`, `plus`, `plus-circle`, `plus-square`, `question-circle`, `repeat`, `rocket`, `save`, `search-minus`, `search-plus`, `sign-in-alt`, `sign-out-alt`, `signal`, `slack`, `slider-v`, `sort-amount-down`, `square-shape`, `star`, `step-backward`, `step-forward`, `sync`, `tag-alt`, `times`, `trash-alt`, `upload`, `user`, `users-alt`.
