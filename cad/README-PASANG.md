# CAD Viewer STEP v2 — untuk proyek Vite yang sudah dibuat

Paket **kode sumber**, bukan installer. **Tidak** berisi Node.js, `node_modules`, atau file STEP, sebab Anda sudah memasangnya sendiri.

Lokasi pengguna:
`D:\Pekerjaan\UNY\01. Pengajaran\2026-2027\Gasal\Gambar Mesin\PBL\Chatgpt\02\cad`

## 1. Stop server Vite
Tekan `Ctrl + C` di PowerShell yang masih menampilkan `VITE ready`. Jika ada pertanyaan, ketik `Y` lalu Enter.

## 2. Salin empat file ini ke folder `cad`
- `index.html` → `cad\index.html` (ganti halaman Vite yang lama)
- `vite.config.js` → `cad\vite.config.js`
- `src\main.js` → `cad\src\main.js`
- `src\style.css` → `cad\src\style.css`

Jangan menghapus `public\step`! Kelima file `.stp` harus tetap di `cad\public\step`.

## 3. Jalankan
```powershell
cd "D:\Pekerjaan\UNY\01. Pengajaran\2026-2027\Gasal\Gambar Mesin\PBL\Chatgpt\02\cad"
npm.cmd run dev
```
Lalu buka `http://localhost:5173/` (bukan `http://localhost:5173/step/AXLE.stp`).

Untuk memeriksa kompilasi:
```powershell
# hentikan dev server dulu dengan Ctrl+C
npm.cmd run build
```
Jika berhasil, Vite menghasilkan folder `dist/` yang dapat dipublikasikan di GitHub Pages pada subfolder terpisah, tanpa mengganti portal PBL lama.

## Fitur
- Memilih lima model STEP melalui dropdown, memutar, zoom, dan pan.
- Mode Jarak 2 Titik: klik dua lokasi pada permukaan mesh; hasil jarak *aproksimasi triangulasi* (bukan jarak proyeksi ortogonal/eksak B-Rep).
- Mode Diameter / Radius: klik **permukaan silinder** yang dikenali dari B-Rep CAD. Nilai nominal berasal dari `BRepAdaptor_Surface.Cylinder().Radius()`, bukan fitting segitiga.
- Garis dan anotasi pengukuran.
- Section view otomatis sengaja tidak disediakan (mahasiswa belajar menggambar sendiri di AutoCAD 2D).

## Jika gagal muncul
1. Gunakan F12 → Console, perhatikan pesan error pertama.
2. Periksa kedua paket: `npm.cmd list three opencascade.js`.
3. Periksa `http://localhost:5173/step/AXLE.stp` menampilkan data STEP.
4. Jika gagal pada file WASM / pembacaan STEP, kirim screenshot **Console** bersama isi pesan `Informasi aplikasi`.
5. Paket ini menggunakan API OpenCascade.js 2.0.0-beta dan *belum diuji end-to-end dengan browser Windows Anda*. Sintaks JavaScript telah diperiksa, tetapi kompatibilitas runtime perlu divalidasi.

## Catatan keamanan dan penerbitan
- File `.stp` yang dipublikasikan pada GitHub Pages dapat diunduh publik.
- `vite.config.js` mengatur `base: './'` agar aset dapat dimuat dari subfolder GitHub Pages.
- Hindari menyalin `node_modules` ke GitHub. Unggah file `dist/` hasil build saja untuk penerbitan statis.
- OpenCascade.js (OCCT) berlisensi LGPL, cek kewajiban lisensi saat distribusi.
