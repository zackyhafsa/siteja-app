# Siteja App 🚀

Selamat datang di dokumentasi project **Siteja App**!
Dokumentasi ini dibuat khusus untuk membantu tim (termasuk yang baru belajar) agar bisa memahami, menjalankan, dan berkontribusi pada project ini dengan mudah.

## 🛠️ Teknologi yang Digunakan

Project ini dibangun menggunakan teknologi modern berikut:

- **[Next.js 16](https://nextjs.org/)**: Framework utama untuk membuat aplikasi web ini.
- **[React 19](https://react.dev/)**: Library untuk membuat tampilan (UI).
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS untuk styling agar lebih cepat dan rapi.
- **[TypeScript](https://www.typescriptlang.org/)**: Versi JavaScript yang lebih aman (membantu mencegah error koding).

---

## 📋 Persiapan (Sebelum Mulai)

Pastikan di laptop kalian sudah terinstall aplikasi berikut:

1.  **[Node.js](https://nodejs.org/)** (Versi LTS disarankan): Ini mesin utama untuk menjalankan JavaScript di luar browser.
2.  **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**: Text editor untuk menulis kodingan.
3.  **[Git](https://git-scm.com/)**: Untuk mengatur versi kodingan dan kolaborasi tim.

---

## 🚀 Cara Menjalankan Project (Langkah demi Langkah)

Ikuti langkah-langkah ini untuk menjalankan project di laptop kalian:

### 1. Clone Repository (Download Kodingan)

Buka terminal (atau Command Prompt/Git Bash), lalu ketik perintah ini untuk mendownload project ke laptop kalian:

```bash
git clone <link-repository-ini>
```

_Ganti `<link-repository-ini>` dengan link GitHub project kita._

### 2. Masuk ke Folder Project

Setelah download selesai, masuk ke dalam foldernya:

```bash
cd siteja-app
```

### 3. Install Dependencies (Download Paket Pendukung)

Project ini butuh beberapa "paket" tambahan agar bisa jalan. Install semuanya dengan perintah:

```bash
npm install
# atau jika menggunakan yarn:
# yarn install
```

_Tunggu sampai prosesnya selesai._

### 4. Jalankan Server Development

Sekarang, nyalakan projectnya dengan perintah:

```bash
npm run dev
```

Jika berhasil, akan muncul tulisan seperti:
`Ready in 1234ms`
`Local: http://localhost:3000`

### 5. Buka di Browser

Buka browser (Chrome/Edge/Firefox) dan kunjungi alamat:
**[http://localhost:3000](http://localhost:3000)**

Selamat! Kalian sudah berhasil menjalankan project Siteja App. 🎉

---

## 📂 Struktur Folder (Penting Diketahui)

Berikut adalah penjelasan singkat tentang folder-folder penting di sini:

- **`app/`**: Ini adalah folder UTAMA kita.
  - `page.tsx`: Halaman utama (Home page) yang muncul pertama kali.
  - `layout.tsx`: Kerangka utama website (biasanya berisi navbar atau footer yang muncul di semua halaman).
  - `globals.css`: File CSS global untuk mengatur gaya tampilan secara umum.
- **`public/`**: Tempat menyimpan gambar, logo, atau file statis lainnya (seperti `next.svg`).
- **`package.json`**: Daftar "resep" project, berisi info nama project dan daftar library yang dipakai.

---

## 💡 Tips untuk Pemula

1.  **Jangan Takut Error**: Error itu wajar. Baca pesan errornya di terminal atau browser, biasanya dikasih tau baris berapa yang salah.
2.  **Gunakan Extension VS Code**: Install extension seperti "ESLint", "Prettier", dan "Tailwind CSS IntelliSense" di VS Code biar ngoding lebih enak.
3.  **Tanya Tim**: Kalau bingung, jangan ragu tanya di grup tim kita.

---

## 🤝 Cara Berkolaborasi (Git Flow Sederhana)

Agar kodingan kita tidak bentrok, ikuti aturan main ini:

1.  **Jangan koding langsung di `main`**: Selalu buat cabang (branch) baru untuk fitur yang mau kalian kerjakan.
    ```bash
    git checkout -b nama-fitur-kalian
    ```
2.  **Simpan Perubahan (Commit)**:
    ```bash
    git add .
    git commit -m "Menambahkan fitur login"
    ```
3.  **Upload (Push)**:
    ```bash
    git push origin nama-fitur-kalian
    ```

Semangat berkarya! 💪
