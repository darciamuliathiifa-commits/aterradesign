# 🌋 BLUEPRINT — Landing Page ATERRA (PT Ananda Terra Nusantara)

> Rancangan lengkap + rencana eksekusi step-by-step pakai **Replit Agent**.
> Sumber konten: `draft_website.docx`

---

## 1. Ringkasan Proyek

| Item | Detail |
| --- | --- |
| **Nama** | ATERRA — PT Ananda Terra Nusantara |
| **Jenis** | Landing page company profile (single page, multi-section) |
| **Bisnis** | Eksportir komoditas Indonesia: kopi, kayu manis (cassia), pala, briket arang |
| **Target audiens** | Buyer internasional B2B (importir, roaster, trader F&B, distributor shisha/BBQ) |
| **Tujuan utama halaman** | Membuat buyer asing percaya lalu mengisi **Export Inquiry form** / kontak WhatsApp |
| **Bahasa konten** | English (target pasar internasional) |
| **Tool eksekusi** | Replit Agent (nulis kode saja) → push ke GitHub → deploy di **Vercel** |
| **Database** | **Supabase** (opsional — hanya kalau mau simpan data inquiry) |

**Satu kalimat positioning:** "Premium Indonesian commodities, traceable from farm to port."

---

## 2. Tech Stack & Pembagian Peran

Pembagian perannya jelas: **Replit Agent = tukang koding · GitHub = jembatan · Vercel = hosting · Supabase = database (kalau perlu).**

| Peran | Tool | Catatan |
| --- | --- | --- |
| Nulis & iterasi kode | Replit Agent | Cuma dipakai buat generate kode, BUKAN hosting |
| Version control | GitHub | Push repo dari Replit → jadi jembatan ke Vercel |
| Hosting + domain | Vercel | Auto-deploy tiap push ke GitHub, gratis untuk project gini |
| Database (opsional) | Supabase | Hanya kalau mau nyimpen data inquiry di tabel |

- **Frontend:** React + Vite + Tailwind CSS — stack default Replit Agent **dan** framework preset yang dideteksi otomatis sama Vercel. Klop di dua sisi.
- **Form inquiry:** 3 opsi —
  - **Opsi A (paling simpel):** form submit → buka WhatsApp dengan pesan terformat (`wa.me` link). Zero backend, zero database.
  - **Opsi B:** form → kirim email via Web3Forms / Formspree (gratis, cuma butuh 1 API key). Tetap tanpa database.
  - **Opsi C (Supabase):** form → insert ke tabel `inquiries` di Supabase. Semua inquiry buyer tersimpan rapi dan bisa dilihat/di-export dari dashboard Supabase. **Ini satu-satunya alasan lo butuh database di project ini.**
- **Yang TIDAK perlu:** auth, CMS, backend server sendiri. Kalaupun pakai Supabase, cukup client-side insert pakai anon key + Row Level Security (insert-only, tabel nggak bisa dibaca publik).
- **PENTING (kasih tau ke agent):** kode harus berupa **project Vite standar tanpa konfigurasi khusus Replit** — build `npm run build`, output `dist/` — biar begitu di-push ke GitHub, Vercel langsung bisa build tanpa oprek apa-apa. Ini udah ditulis di Master Prompt.

---

## 3. Struktur Halaman (Sitemap Section)

Urutan section dari atas ke bawah, semua dari draft Word lo:

```
┌──────────────────────────────────────────┐
│ 0. NAVBAR (sticky, transparan → solid)   │
├──────────────────────────────────────────┤
│ 1. HERO — video fullscreen + overlay     │
├──────────────────────────────────────────┤
│ 2. ABOUT US                              │
├──────────────────────────────────────────┤
│ 3. OUR SERVICES (ekspor/logistik/gudang) │
├──────────────────────────────────────────┤
│ 4. CORE COMMODITIES (4 kartu produk)     │
├──────────────────────────────────────────┤
│ 5. ORIGIN COFFEES (7 origin + taste)     │
├──────────────────────────────────────────┤
│ 6. EXPORT PROCESS (4 langkah timeline)   │
├──────────────────────────────────────────┤
│ 7. CERTIFICATIONS (Coffee | Briquettes)  │
├──────────────────────────────────────────┤
│ 8. EXPORT INQUIRY (form)                 │
├──────────────────────────────────────────┤
│ 9. CONTACT + FOOTER                      │
└──────────────────────────────────────────┘
```

### Detail per section

**0. Navbar**
- Logo kiri, menu kanan: About · Products · Origins · Process · Certifications · Contact
- Awalnya transparan di atas video hero, berubah jadi solid (dark green) + shadow saat scroll
- CTA button kanan: **"Request a Quote"** → scroll ke form inquiry

**1. Hero (video + overlay) — sesuai request lo**
- Video fullscreen `100vh`, autoplay, muted, loop
- Overlay hitam tipis di atas video biar teks kebaca
- Konten di tengah: headline besar + subheadline + 2 tombol
- Headline saran: **"From Indonesian Soil to the World"**
- Subheadline: "Premium coffee, cinnamon, nutmeg & charcoal briquettes — sourced directly from smallholder farmers, delivered to global markets."
- CTA primary: "Explore Our Commodities" · CTA secondary: "Export Inquiry"
- Detail teknis lengkap di **Section 4** bawah.

**2. About Us**
- Layout 2 kolom: teks kiri (dari draft, paragraf "Ananda Terra Nusantara..."), foto kanan (petani/kebun kopi)
- Tambah 3 badge nilai: **Direct from Farmers · Sustainable Sourcing · Farm-to-Port QC**

**3. Our Services**
- 3 kartu ikon: **Commodity Export** · **Logistics & Tracking** · **Warehousing**
- (Draft nulis "OUR SERVE" — diperbaiki jadi "Our Services")

**4. Core Commodities**
- Grid 4 kartu besar bergambar: Coffee · Cinnamon (Cassia Vera) · Nutmeg · Charcoal Briquettes
- Deskripsi singkat tiap kartu diambil dari bullet "Our Core Commodities" di draft

**5. Origin Coffees — section paling khas (signature section)**
- 7 origin: Kintamani Bali, Jember, Ijen, Bandung (Java Preanger), Lampung, Kerinci, Palembang
- Format: grid kartu, tiap kartu ada nama origin, region, elevasi, deskripsi singkat, dan **taste profile** ditampilkan sebagai tag/chip (misal: `Bright Citrus` `Floral` `Honey Finish`)
- Kintamani dikasih badge khusus: **GI Certified (2008)** karena punya sertifikasi Indikasi Geografis
- Opsional keren: filter kecil `All · Arabica · Robusta` atau peta Indonesia mini dengan titik origin

**6. Export Process**
- Timeline horizontal 4 langkah (di mobile jadi vertikal):
  1. **Lot Selection** — cupping notes + green sample → approval → procurement
  2. **Milling & Grading** — dry mill Medan, Screen 15+, standar SCA
  3. **Documentation** — Phyto, COO, ICO cert, cupping report, traceability
  4. **Shipment** — FCL/LCL dari Belawan / Tanjung Priok, GrainPro/jute, lead time 3–5 minggu
- Tagline section dari draft: *"Seamless from Farm to Port"*

**7. Certifications**
- 2 tab / 2 kolom: **Coffee** (COO, ICO Certificate, Phytosanitary, Fumigation) dan **Briquettes** (MSDS, COA, Fumigation)
- Tiap sertifikat: nama + 1 kalimat penjelasan dari draft

**8. Export Inquiry Form**
- Field sesuai draft: Full Name · Company Name · Email · Country · Origin of Interest (dropdown: 7 origin kopi + Cinnamon + Nutmeg + Briquettes) · Estimated Annual Volume · Message
- ("massage" di draft diperbaiki jadi "Message" 😄)
- Tombol submit: **"Send Inquiry"**

**9. Contact + Footer**
- Export Office: Bandung · Email: anandaterranusantara@gmail.com · WhatsApp: +62 895-1051-9278 (dibuat link `wa.me/62895xxxxxxx`)
- Port of Loading: Tanjung Priok (Jakarta) & Belawan (Medan)
- Footer: logo, quick links, copyright

---

## 4. Spesifikasi Hero Video + Overlay (bagian yang lo maksud)

Iya, gue ngerti maksud lo: video jalan di background, di atasnya ada lapisan hitam semi-transparan biar teks putihnya kebaca jelas. Ini speknya:

**Struktur layer (dari belakang ke depan):**
1. `<video>` — fullscreen, `object-fit: cover`, `autoplay muted loop playsinline`
2. Overlay — `div` hitam transparan. Saran: **gradient**, bukan flat, biar lebih cinematic:
   - `background: linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65))`
   - Kalau mau flat simpel: `rgba(0,0,0,0.45)` — angka 0.4–0.55 itu sweet spot "hitam dikit"
3. Konten teks — headline, subheadline, tombol (z-index paling atas)

**Aturan teknis penting (kasih tau ke Replit Agent):**
- `muted` + `playsinline` WAJIB — tanpa ini autoplay diblokir di iPhone/Chrome
- Sediakan `poster` image (frame pertama video) sebagai fallback saat video loading / gagal
- Ukuran video: kompres ke **maksimal 5–8 MB**, resolusi 1080p, durasi 10–20 detik loop, format `.mp4` (H.264) atau `.webm`
- Di koneksi lambat / `prefers-reduced-motion`, tampilkan poster image saja

**Konten video (siapin sendiri):**
- Ideal: footage kebun kopi / proses jemur biji / pelabuhan kontainer
- Kalau belum punya footage sendiri: cari stock video gratis di **Pexels** atau **Coverr** (keyword: "coffee plantation", "coffee beans drying", "cargo port") — lisensi bebas komersial

---

## 5. Arah Desain (Design Direction)

Karakter: **premium, earthy, terpercaya** — bukan startup-y, tapi kayak eksportir mapan.

**Palet warna (dari dunia si produk sendiri — tanah vulkanik, kopi, karung goni):**

| Token | Hex | Pakai untuk |
| --- | --- | --- |
| Deep Forest | `#1B3A2D` | Background section gelap, navbar solid |
| Roasted Brown | `#4A2C1A` | Aksen, heading di section terang |
| Parchment | `#F5EFE4` | Background section terang |
| Copper | `#B4713D` | CTA button, hover, highlight, tag taste |
| Off-White | `#FAF8F3` | Teks di atas background gelap |
| Ink | `#22201C` | Body text di section terang |

**Tipografi:**
- Display/heading: **Fraunces** (serif berkarakter, kesan craft & heritage — cocok buat "Java Preanger heritage")
- Body: **Plus Jakarta Sans** (bersih, modern, dan bonus: bikinan Indonesia 🇮🇩)
- Angka/label kecil (elevasi, lead time): letter-spacing lebar, uppercase, ukuran kecil

**Prinsip:**
- Section gelap dan terang selang-seling (hero gelap → about terang → commodities gelap → dst) biar ada ritme
- Foto asli > ilustrasi. Foto petani, biji kopi, karung goni, pelabuhan
- Animasi secukupnya: fade-up halus saat scroll, jangan berlebihan
- Signature visual: section **Origin Coffees** dengan taste-tag berwarna copper — ini yang bikin site-nya beda dari company profile eksportir pada umumnya

---

## 6. Perbaikan Konten dari Draft (penting, biar keliatan pro)

Sebelum masuk ke website, rapikan typo di draft:

| Di draft | Diperbaiki jadi |
| --- | --- |
| "Coffe" (di semua judul origin) | "Coffee" |
| "OUR SERVE" | "Our Services" |
| "massage" (di form) | "Message" |
| "Tanjung priuk" | "Tanjung Priok" |
| "( ATERRA )is" | "(ATERRA) is" |
| Kalimat gantung "...Sumatra and Java Islands .our products" | "...including Sumatra and Java." (hapus sisa kalimat gantung) |

Catatan konten: di "OUR SERVE" draft nyebut **kakao**, tapi kakao nggak ada di Core Commodities maupun deskripsi About. Putuskan: mau dimasukkan sebagai komoditas ke-5, atau dihapus dari daftar services biar konsisten. (Blueprint ini default-nya: dihapus dulu, gampang ditambah nanti.)

---

## 7. Rencana Eksekusi Step-by-Step (Replit Agent)

### 🟤 Fase 0 — Persiapan Aset (sebelum buka Replit)
- [ ] Video hero (mp4, ≤8 MB, 10–20 detik) + 1 poster image
- [ ] Logo ATERRA (PNG transparan / SVG). Belum ada logo? Sementara pakai wordmark teks "ATERRA" dulu
- [ ] 4 foto komoditas (coffee, cinnamon, nutmeg, briquettes) + 1–2 foto petani/kebun untuk About
- [ ] Foto per origin kopi kalau ada (opsional — kartu origin bisa tanpa foto dulu)
- [ ] Nomor WhatsApp final + email final (yang di draft: +62 895-1051-9278)
- [ ] Akun **GitHub** + akun **Vercel** (login Vercel pakai GitHub biar sekali jalan) — dua-duanya gratis
- [ ] Kalau pilih Opsi B form: daftar Web3Forms (gratis) → simpan access key
- [ ] Kalau pilih Opsi C form: bikin project **Supabase** (gratis) → simpan Project URL + anon key (Project Settings → API)

> Tips: kumpulkan semua aset dalam satu folder, nanti tinggal drag & drop ke file tree Replit (folder `public/` atau `src/assets/`).

### 🟤 Fase 1 — Master Prompt (build pertama)
1. Buka Replit → Create App → pilih **Replit Agent**
2. Paste **Master Prompt** (Section 8 di bawah) — sudah dalam bahasa Inggris karena agent lebih akurat dengan prompt English
3. Biarkan agent selesai build pertama. **Jangan interupsi di tengah** — tunggu sampai dia kasih preview
4. Upload aset (video, foto, logo) ke folder yang agent buat, lalu bilang ke agent file mana untuk apa

### 🟤 Fase 2 — Review & Poles Hero
Cek hero dulu karena ini first impression:
- [ ] Video autoplay jalan? (tes di HP juga — ini yang paling sering gagal)
- [ ] Overlay pas? Kalau teks kurang kebaca, minta naikkan opacity: *"increase the hero overlay opacity to 0.55"*
- [ ] Headline & tombol posisinya bener di mobile?

### 🟤 Fase 3 — Iterasi Section per Section
Review dari atas ke bawah, kasih feedback **satu section per prompt** (jangan borongan — hasil agent lebih presisi). Contoh prompt iterasi ada di Section 9.

### 🟤 Fase 4 — Fungsikan Form Inquiry
- **Opsi A (WhatsApp):** minta agent format isi form jadi pesan WhatsApp → buka `wa.me/6289510519278` dengan teks terisi otomatis
- **Opsi B (Email):** kasih agent access key Web3Forms, minta dia sambungkan form + tampilkan pesan sukses "Thank you, our export team will reply within 24 hours."
- **Opsi C (Supabase):**
  1. Di Supabase → SQL Editor, jalankan SQL ini sekali (bikin tabel + kunci keamanannya):
     ```sql
     create table inquiries (
       id uuid primary key default gen_random_uuid(),
       full_name text not null,
       company_name text,
       email text not null,
       country text,
       origin_of_interest text,
       estimated_annual_volume text,
       message text,
       created_at timestamptz default now()
     );

     alter table inquiries enable row level security;

     create policy "allow anonymous inserts"
       on inquiries for insert
       with check (true);
     ```
     (RLS insert-only: pengunjung cuma bisa **kirim**, nggak bisa **baca** data inquiry orang lain)
  2. Kasih ke Replit Agent **Add-on Prompt Supabase** (Section 8B di bawah)
  3. Isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` di file `.env` untuk tes lokal di Replit
- [ ] Tes submit beneran: pesan masuk WA/email, atau row baru muncul di tabel `inquiries` (Supabase → Table Editor)

### 🟤 Fase 5 — Responsive, Performa, SEO
- [ ] Tes di 3 ukuran: HP (375px), tablet, desktop
- [ ] Minta agent: lazy-load semua gambar di bawah hero
- [ ] Minta agent isi meta tags: title "ATERRA — Indonesian Coffee, Spices & Charcoal Briquettes Exporter", meta description, dan Open Graph image (biar bagus saat di-share di WhatsApp/LinkedIn)
- [ ] Favicon dari logo

### 🟤 Fase 6 — Push ke GitHub → Deploy di Vercel
1. Di Replit, buka tool **Git** (panel kiri) → **Connect to GitHub** → create repo baru (misal `aterra-website`) → commit semua → **Push**
2. Buka [vercel.com](https://vercel.com) → **Add New → Project** → import repo `aterra-website` dari GitHub
3. Vercel otomatis deteksi framework **Vite** — build command `npm run build`, output `dist`. Biarkan default, jangan diubah
4. **Kalau pakai Supabase (Opsi C):** sebelum deploy, tambahkan Environment Variables di Vercel → `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` (nilai dari Supabase → Project Settings → API)
5. Klik **Deploy** → dapet URL live `aterra-website.vercel.app` → tes di HP + laptop
6. Custom domain: Vercel → project → Settings → **Domains** → tambah domain lo (misal `anandaterra.com`) → ikuti instruksi DNS record di registrar. HTTPS otomatis aktif
7. Mulai sekarang alurnya: **edit di Replit → push ke GitHub → Vercel auto-deploy.** Nggak ada deploy manual lagi
8. Share ke 2–3 orang, minta feedback, iterasi kecil terakhir

---

## 8. MASTER PROMPT — tinggal copy-paste ke Replit Agent

```
Build a single-page landing website for "ATERRA (PT Ananda Terra Nusantara)", an Indonesian export company selling premium coffee, cinnamon (cassia vera), nutmeg, and charcoal briquettes to international B2B buyers. All website copy in English. Use React + Vite + Tailwind CSS. This is a static landing page: no auth, no CMS, no custom backend server.

DEPLOYMENT TARGET (IMPORTANT): This code will be pushed to GitHub and deployed on VERCEL — it will NOT be hosted on Replit. Keep it a clean, standard Vite project that builds with "npm run build" and outputs to "dist". Do not add any Replit-specific deployment configuration or Replit-only dependencies. Include a proper .gitignore (node_modules, dist, .env), read any secrets from environment variables prefixed with VITE_, and provide a .env.example file.

DESIGN SYSTEM
- Colors: deep forest green #1B3A2D (dark sections, navbar), roasted brown #4A2C1A, parchment #F5EFE4 (light sections), copper #B4713D (buttons, accents, tags), off-white #FAF8F3 (text on dark), ink #22201C (text on light).
- Fonts (Google Fonts): "Fraunces" for headings, "Plus Jakarta Sans" for body.
- Alternate dark and light section backgrounds for rhythm. Subtle fade-up on scroll for section content, nothing flashy. Respect prefers-reduced-motion.
- Premium, earthy, established-exporter feel. Generous whitespace, no clutter.

SECTIONS (top to bottom)

1. NAVBAR: transparent over the hero, becomes solid deep-green with shadow on scroll. Left: "ATERRA" wordmark. Links: About, Products, Origins, Process, Certifications, Contact (smooth scroll). Right: copper button "Request a Quote" scrolling to the inquiry form. Hamburger menu on mobile.

2. HERO: full-viewport (100vh) background VIDEO with a dark overlay so white text stays readable. Structure: <video autoplay muted loop playsinline> with object-fit cover and a poster image fallback, then an overlay div with linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65)), then centered content: H1 "From Indonesian Soil to the World", subheadline "Premium coffee, cinnamon, nutmeg & charcoal briquettes — sourced directly from smallholder farmers, delivered to global markets.", primary button "Explore Our Commodities" (scrolls to products) and outline button "Export Inquiry" (scrolls to form). Use a placeholder video at /public/hero.mp4 and poster at /public/hero-poster.jpg — I will upload the real files.

3. ABOUT US: two columns (stack on mobile). Left: heading "About ATERRA" and this copy: "Ananda Terra Nusantara (ATERRA) is an Indonesia-based export company specializing in premium agricultural and natural commodities, including coffee, cinnamon, nutmeg, and charcoal briquettes — sourced directly from smallholder farmers and trusted regional suppliers across Indonesia's most fertile growing regions, including Sumatra and Java. We work closely with local farming communities to ensure consistent quality, sustainable harvesting practices, and fair trade partnerships, while maintaining strict quality control from farm to port. Our export operations are supported by established logistics networks, enabling reliable, timely delivery to international buyers in the food & beverage, spice, and energy sectors." Right: image placeholder /public/about.jpg. Below the copy, three small badges: "Direct from Farmers", "Sustainable Sourcing", "Farm-to-Port QC".

4. OUR SERVICES: three icon cards — "Commodity Export" (coffee, cinnamon, nutmeg, briquettes), "Logistics & Tracking", "Warehousing". One short sentence each.

5. CORE COMMODITIES: heading "Our Core Commodities", grid of 4 large image cards:
- Coffee — "Arabica and Robusta beans from Sumatra, Java, Toraja, and other renowned growing regions."
- Cinnamon (Cassia Vera) — "High-quality cinnamon bark from West Sumatra, among the world's largest cassia-producing regions."
- Nutmeg — "Whole nutmeg and mace from the Banda Islands and North Sulawesi."
- Charcoal Briquettes — "Coconut shell and wood-based briquettes for BBQ, shisha, and industrial fuel markets."
Image placeholders /public/coffee.jpg, /public/cinnamon.jpg, /public/nutmeg.jpg, /public/briquettes.jpg.

6. ORIGIN COFFEES (signature section, dark background): heading "Origin Coffees", subheading "Seven distinct origins, one standard of quality." Grid of 7 cards, each with origin name, region line, short description, and taste notes rendered as small copper-colored tag chips:
- Kintamani Bali (900–1,600 masl, Bali) — Bali's volcanic-slope arabica under the traditional Subak Abian system; Indonesia's first GI-certified coffee (2008); fully washed, bright and clean. Add a small badge "GI Certified 2008". Tags: Bright Citrus, Floral, Honey Finish, Clean Cup.
- Jember (East Java) — balanced Robusta region prized by blenders for consistent profile and reliable bulk supply. Tags: Full Body, Roasted Nuts, Caramel, Low Acidity.
- Ijen (East Java, 1,000+ masl) — volcanic plateau coffee, semi-washed (Giling Basah), syrupy body. Tags: Smoky, Dark Chocolate, Spice, Syrupy Body.
- Bandung / Java Preanger (West Java) — heritage colonial-era growing region, smooth approachable profile. Tags: Medium Body, Caramel, Toasted Almond, Clean Finish.
- Lampung (Sumatra) — Indonesia's largest Robusta region, bold backbone of commercial blends. Tags: Bold, Strong Bitterness, Earthy, Robust Finish.
- Kerinci (Jambi, Sumatra, 1,500+ masl) — one of Indonesia's highest growing regions, complex and bright for a Sumatran. Tags: Dark Fruit, Herbal Spice, Heavy Body, Rich Aftertaste.
- Palembang (South Sumatra) — bold lowland Robusta, traditional tubruk-style character, competitive pricing. Tags: Bold, Smoky, Thick Mouthfeel, Low Acidity.

7. EXPORT PROCESS: heading "Export Process", tagline "Seamless from Farm to Port". Horizontal 4-step timeline (vertical on mobile):
(1) Lot Selection — "Buyer receives cupping notes and a green sample. Approval triggers procurement from contracted cooperatives at the agreed price."
(2) Milling & Grading — "Wet-hulled or washed processing at our certified dry mill in Medan. Screen 15+ grading and defect sorting to SCA standards."
(3) Documentation — "Phytosanitary certificate, COO, ICO certificate, cupping report, and lot traceability issued per shipment."
(4) Shipment — "FCL or LCL from Belawan or Tanjung Priok. GrainPro or jute bagging per buyer specification. Lead time 3–5 weeks."

8. CERTIFICATIONS: heading "Certifications", subheading "Compliance and trust". Two columns or tabs: COFFEE — Certificate of Origin (COO), ICO Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate; BRIQUETTES — MSDS, Certificate of Analysis (COA), Fumigation Certificate. Each item: name + one-line explanation.

9. EXPORT INQUIRY: heading "Export Inquiry", subheading "Tell us what you need — our export team replies within 24 hours." Form fields: Full Name, Company Name, Email, Country, Origin of Interest (select: the 7 coffee origins + Cinnamon + Nutmeg + Charcoal Briquettes), Estimated Annual Volume, Message. Copper submit button "Send Inquiry". On submit, open WhatsApp (wa.me/6289510519278) with the form contents pre-filled as a formatted message, and show a success note.

10. CONTACT + FOOTER: Export Office: Bandung, Indonesia · Email: anandaterranusantara@gmail.com (mailto link) · WhatsApp: +62 895-1051-9278 (wa.me link) · Ports of Loading: Tanjung Priok (Jakarta) & Belawan (Medan). Footer: ATERRA wordmark, quick links, © 2026 PT Ananda Terra Nusantara.

QUALITY BAR
- Fully responsive down to 375px. Lazy-load all images below the hero.
- SEO: title "ATERRA — Indonesian Coffee, Spices & Charcoal Briquettes Exporter", meta description, Open Graph tags.
- Use royalty-free placeholder images where I haven't uploaded files yet, and list for me every placeholder path I need to replace.
```

---

## 8B. ADD-ON PROMPT — Supabase untuk form inquiry (Opsi C)

Pakai ini **setelah** build pertama jadi, dan **setelah** lo jalankan SQL di Fase 4. Copy-paste ke agent:

```
Connect the Export Inquiry form to Supabase. Install @supabase/supabase-js and create a Supabase client that reads import.meta.env.VITE_SUPABASE_URL and import.meta.env.VITE_SUPABASE_ANON_KEY (add both to .env.example). On submit, insert the form values into a table called "inquiries" with columns: full_name, company_name, email, country, origin_of_interest, estimated_annual_volume, message. Validate that full_name and email are filled before submitting. On success, clear the form and show "Thank you — our export team will reply within 24 hours." On failure, show a clear error message and keep the form values. Keep WhatsApp as a secondary option: a smaller button "Or chat on WhatsApp" linking to https://wa.me/6289510519278. Do not expose any key other than the anon key in client code.
```

---

## 9. Prompt Library — buat iterasi setelah build pertama

Simpan ini, tinggal pakai sesuai kebutuhan (satu prompt per giliran):

| Kebutuhan | Prompt ke agent |
| --- | --- |
| Overlay kurang gelap | `Increase the hero overlay to rgba(0,0,0,0.55) flat — the headline is hard to read over bright video frames.` |
| Video nggak autoplay di HP | `The hero video doesn't autoplay on mobile. Ensure the video tag has muted, playsinline, and autoplay attributes, and show the poster image as fallback.` |
| Ganti file video asli | `I uploaded hero.mp4 and hero-poster.jpg to /public. Wire them into the hero section.` |
| Kartu origin kepanjangan | `Shorten each origin coffee card description to max 2 lines and keep the taste tags.` |
| Form ganti ke email | `Replace the WhatsApp form submission with Web3Forms using this access key: <KEY>. Show a success message after sending.` |
| Siap-siap push ke GitHub | `Make sure this is a standard Vite project ready for Vercel: proper .gitignore, no Replit-specific config, builds cleanly with npm run build.` |
| Build error di Vercel | `Vercel build failed with this error: <paste error log>. Fix it while keeping the project a standard Vite build.` |
| Env var Supabase nggak kebaca | `The Supabase env variables return undefined in production. Ensure they are read via import.meta.env with the VITE_ prefix and used at runtime correctly.` |
| Navbar transisi kasar | `Make the navbar background transition smooth (300ms) when it switches from transparent to solid on scroll.` |
| Kurang cepat | `Compress and lazy-load all images, and preload only the hero poster. Target Lighthouse performance above 90.` |

---

## 10. Checklist Final Sebelum Launch

- [ ] Semua placeholder image sudah diganti foto asli
- [ ] Video hero ≤8 MB, autoplay jalan di iPhone & Android
- [ ] Form inquiry sudah dites — pesan beneran masuk WA/email
- [ ] Semua typo draft sudah bersih (Coffee, Our Services, Message, Tanjung Priok)
- [ ] Keputusan soal "kakao": masuk atau dihapus (lihat Section 6)
- [ ] Meta title, description, OG image terpasang
- [ ] Tes di HP asli, bukan cuma resize browser
- [ ] Repo GitHub tersambung ke Vercel, auto-deploy jalan tiap push
- [ ] (Opsi C) Env vars Supabase terpasang di Vercel + tes: submit form → row muncul di tabel `inquiries`
- [ ] Custom domain tersambung di Vercel + HTTPS aktif

---

*Blueprint ini dibuat dari `draft_website.docx` — semua konten origin, proses ekspor, sertifikasi, dan kontak diambil langsung dari draft dengan perbaikan typo minor.*
