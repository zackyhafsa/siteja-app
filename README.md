# Siteja App 🚀

![Siteja Logo](./public/siteja-logo.jpeg)

Selamat datang di dokumentasi project **Siteja App**!
Dokumentasi ini dibuat khusus untuk membantu tim (termasuk yang baru belajar) agar bisa memahami, menjalankan, dan berkontribusi pada project ini dengan mudah.

## 🛠️ Teknologi yang Digunakan

Project ini dibangun menggunakan teknologi modern berikut:

- **[Next.js 16](https://nextjs.org/)**: Framework utama untuk membuat aplikasi web ini.
- **[React 19](https://react.dev/)**: Library untuk membuat tampilan (UI).
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS untuk styling agar lebih cepat dan rapi.
- **[TypeScript](https://www.typescriptlang.org/)**: Versi JavaScript yang lebih aman (membantu mencegah error koding).
- **[Vercel AI SDK](https://ai-sdk.dev/docs/introduction)**: Software Development Kit, tools untuk menghubungkan ke LLM dengan mudah.

---

## 📋 Persiapan (Sebelum Mulai)

Requirement:

1.  **[Node.js](https://nodejs.org/)** (Versi LTS disarankan): Ini mesin utama untuk menjalankan JavaScript di luar browser.
2.  **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**: Text editor untuk menulis kodingan.
3.  **[Git](https://git-scm.com/)**: Untuk mengatur versi kodingan dan kolaborasi tim.

---

## 🚀 Cara Menjalankan Project (Langkah demi Langkah)

### 1. Clone Repository (Download Kodingan)

Buka terminal/Command Prompt/Git Bash (disarankan pakai GitBash), lalu ketik perintah ini untuk mendownload project:

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

Untuk Frontend:

- Fokus pada folder **`app/`** dan **`public/`** jika butuh asset yang dibutuhkan
- Boleh menambahkan folder apapun, tapi **disarankan**:
  - Jika ingin menambahkan komponen, buat folder yang sesuai di **`app/`**nya, contoh: **`app/components`**
  - Jika ingin menambahkan asset, buat folder yang sesuai di **`public/`**nya, contoh: **`app/assets`** atau **`app/img`**
  - Jangan lupa ganti logo tab di browsernya dengan ganti file `favicon.ico` yang ada di folder **`public/`**, dengan logo siteja dengan nama yang sama yaitu `favicon.ico`.
- Jangan lupa buat NextJs ini menggunakan App Router, jadi untuk halaman yang akan dieksekusi adalah `page.tsx`, di setiap foldernya.
- Pelajari juga mengenai hook `useChat()` yang ada di Vercel AI SDK nya.

Untuk Backend:

- Fokus pada folder **`app/api/chat/route.ts`** jika folder/file belum dibuat, buat aja manual
- Pelajari mengenai tools Vercel AI SDK, di dokumentasi officialnya, pilih ai yang mau dipakai buat apa (Rekomendasi: Gemini/Groq), cuzz gratis ehehee.
- Pelajari juga bagaimana caranya menghubungkan ke ai nya.
- Di Vercel AI SDK juga sudah lengkap dokumentasinya dan sudah ada contoh kode untuk implementasi ke frontendnya.
- Rekomendasi Model:
  - Gemini: `gemini-2.5-flash`, `gemini-2.5-lite`,
  - Groq: `llama-3.1-8b-instant`, `llama-3.3-70b-versatile`,

Untuk Semuanya:

- Tambahkan file .env.local di root directory (folder terluar, yang sejajar sama folder `app`, `public`, dll)
- Masukkan api key di sana dengan ketentuan berikut:
  - Jika ingin menggunakan AI dari GEMINI buat satu baris kode ini `GOOGLE_GENERATIVE_AI_API_KEY=<masukkan api key gemini di sini>`
  - Jika ingin menggunakan AI dari Groq buat satu baris kode ini `GROQ_API_KEY=<masukkan api key groq di sini>`
  - Pastikan kalian sudah mendapatkan API Key nya!
- Make Sure, cek di file .`gitignore` pastikan ada baris ini `.env*`. agar tidak dipush ke github. (biar ga dipakai sama orang lain).
- Dokumentasi lengkap ada di Vercel AI SDK khusus NextJs App Router di sini: `https://ai-sdk.dev/docs/getting-started/nextjs-app-router`

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
4.  **Jangan lupa, selalu pull terlebih dahulu sebelum kalian memulai nya**, Make sure kalian ngoding di kode terbaru/terakhir di push agar tidak bentrok.
    ```bash
    git pull
    ```

Good Luck Mas Yuda and Mas Uzi
