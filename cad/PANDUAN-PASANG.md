# Portal PBL Gambar Mesin — Integrasi Langsung CAD Viewer STEP

Versi ini menggantikan **beranda Vite**, bukan menambahkan iframe. Pengguna hanya membuka `https://a-fikrie.github.io/gambar-mesin/`. Tidak ada tautan baru menuju `/cad/` di beranda.

## 1. Siapkan sumber di folder 03 (sekali saja)

Folder kerja yang dipakai:
`D:\Pekerjaan\UNY\01. Pengajaran\2026-2027\Gasal\Gambar Mesin\PBL\Chatgpt\03\cad`

1. Cadangkan folder `03\cad` bila sudah ada data yang belum disalin.
2. **Salin isi ZIP ini** ke `03\cad`, ganti file `index.html`, `src\main.js`, `src\style.css`, dan `vite.config.js` yang lama.
3. **Jangan hapus `03\cad\public\step`**: isinya lima file STEP asli (`AXLE.stp`, `BASE PLATE.stp`, `BRACKET.stp`, `WHEEL.stp`, `WHEEL ASSEMBLY.stp`). Jika belum ada, salin dari `PBL\github\step`.
4. Salin `Logo UNY.png` yang ada di folder `PBL\github` ke `03\cad\public\Logo UNY.png`.
5. File lain yang tidak digunakan (misalnya `src\counter.js` atau gambar Vite) boleh dibiarkan. Jangan upload `node_modules`.

## 2. Uji lokal

Jalankan PowerShell:

```powershell
cd "D:\Pekerjaan\UNY\01. Pengajaran\2026-2027\Gasal\Gambar Mesin\PBL\Chatgpt\03\cad"
npm.cmd install
npm.cmd run dev
```

Buka alamat Local yang muncul (biasanya `http://localhost:5173/`).
Periksa beranda, pilih WHEEL ASSEMBLY lalu AXLE, coba panjang aksial/diameter/radius/chamfer dan Visual Style. Saat mengklik alat ukur, model masih bisa diputar dengan drag.

## 3. Build produksi

Hentikan Vite dengan `Ctrl+C`, lalu:

```powershell
npm.cmd run build
```

Output `03\cad\dist` harus berisi:

```
dist/
  index.html     <-- beranda PBL dan viewer satu halaman
  assets/        <-- JS CSS dan WebAssembly
  step/          <-- 5 file STEP
  Logo UNY.png
```

## 4. Publikasi aman ke GitHub Desktop

Repository lokal Anda **langsung** berada di:
`D:\Pekerjaan\UNY\01. Pengajaran\2026-2027\Gasal\Gambar Mesin\PBL\github`

PENTING: Cadangkan `github\index.html` lama, misalnya di folder `03\cadangan` (di luar repository) agar tidak menjadi beranda baru yang tidak disengaja.

Untuk menerbitkan ke **SATU URL beranda**, salin **ISI `dist`** (`index.html`, `assets`, `step`, `Logo UNY.png`) ke **folder `PBL\github`**, BUKAN ke `PBL\github\cad`. Pilih replace jika diminta. Biarkan `.git` dan file lainnya tetap ada; jangan hapusnya. File `cad/` dari versi sebelumnya boleh disimpan sebagai cadangan.

Di GitHub Desktop: centang file hasil build (termasuk `index.html` utama, `assets`, dan `step` jika berubah); isi Summary `Integrate STEP CAD viewer into PBL homepage`; Commit to main; Push origin.

Setelah GitHub Pages berhasil deploy, uji:
`https://a-fikrie.github.io/gambar-mesin/`

Google Sites yang sudah menyematkan URL ini tidak perlu diubah. Untuk verifikasi, tekan Ctrl+F5. Jika laman utama memuat tetapi model tidak, periksa developer console, file WASM dan `/gambar-mesin/step/AXLE.stp`.

## Perhatian

- Situs bersifat statis. Model STEP, JavaScript, dan WASM dipublikasikan secara publik.
- File STEP tidak disertakan dalam paket agar menggunakan model Anda yang sudah terbukti berjalan.
- Halaman tidak memiliki iframe, link menuju `/cad/`, atau GLB viewer kedua.
- Diameter/radius dan chamfer melingkar memakai data B-Rep, sedangkan Panjang Aksial menghitung selisih sepanjang sumbu dua tepi lingkaran yang sesumbu. Mode pengukuran bebas pada mesh memang dihilangkan sesuai permintaan.
- Pengujian dilakukan terlebih dahulu pada localhost dan dibandingkan dengan Autodesk Inventor untuk hasil ukuran penting.
