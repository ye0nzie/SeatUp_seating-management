# 💺 FLA-SEATUP - Smart Seating Ticket Management System

FLA-SEATUP adalah aplikasi manajemen dan pemesanan tiket berbasis web yang dirancang untuk mengoptimalkan pemilihan kursi secara interaktif. Berbeda dengan sistem pemesanan konvensional, aplikasi ini berfokus pada kenyamanan dan privasi pengguna melalui fitur **Gender-Aware Seating System**, yang memungkinkan pengguna perempuan untuk melihat gender dari pengisi kursi di sekitar sebelum melakukan reservasi.

Proyek ini dibangun murni menggunakan teknologi *Frontend* (Vanilla HTML, CSS, JS) dengan menerapkan prinsip **Rekayasa Perangkat Lunak** yang sistematis serta mengimplementasikan berbagai **Design Patterns** untuk memastikan enkapsulasi data, keamanan rute, dan manajemen perubahan status kursi yang rapi di sisi klien (client-side).



Fitur Unggulan

* **Gender-Aware Seating Selection:** Fitur keamanan khusus di mana pengguna perempuan dapat mengidentifikasi gender dari pengguna lain yang sudah memesan kursi di sebelahnya sebelum mengonfirmasi pesanan mereka.
* **Interactive Seat Mapping:** Visualisasi denah kursi secara *real-time* yang interaktif (menampilkan status kursi: tersedia, dipilih, atau sudah terisi).
* **Comprehensive Flow Pages (5+ Pages):** Alur pengguna yang lengkap mulai dari halaman awal, proses registrasi & login, penjelajahan beranda, pemilihan kursi, hingga halaman ringkasan tiket dan pembayaran.
* **Single Source of Truth UI:** Elemen global seperti *navigation bar* dan *footer* dikelola secara terpusat untuk menghindari duplikasi kode antar halaman.


Penerapan Design Patterns (Arsitektur Sistem)

Aplikasi ini tidak menggunakan backend database tradisional, melainkan mengandalkan kecanggihan manipulasi struktur dan *state* di sisi browser memanfaatkan 4 pola desain GoF & Modern:

### 1. Module Pattern (Enkapsulasi & Namespace)
Digunakan di dalam pengelolaan logika JavaScript (seperti `auth.js` dan `order.js`) memanfaatkan mekanisme **Closure** dan **Immediately Invoked Function Expression (IIFE)**. Pola ini mensimulasikan enkapsulasi objek tradisional (seperti pada Java) untuk mengisolasi variabel sensitif (data akun dan data kursi) agar bersifat privat dan terlindung dari polusi *namespace global window*.

### 2. State Pattern (Manajemen Status Kursi)
Mengelola transisi status komponen kursi dari `Available` (Tersedia), `Selected` (Sedang Dipilih), hingga `Booked` (Sudah Dipesan beserta atribut gendernya) secara dinamis pada saat *runtime*. Pola behavioral ini memisahkan logika tiap status ke dalam struktur terenkapsulasi, menghindari blok kondisional bertumpuk (`if-else` / `switch-case`) yang kompleks, serta mematuhi *Open/Closed Principle*.
* **Context:** Objek denah kursi utama.
* **Concrete State:** Implementasi logika visual dan data saat kursi kosong vs saat kursi terisi oleh gender tertentu.

### 3. Proxy Pattern (Protection Proxy / Route Guard)
Bertindak sebagai perantara kontrol akses (*surrogate*) antara pengguna dan halaman web yang dilindungi. Diimplementasikan sebagai **Route Guard** di sisi klien (analog dengan *middleware authentication* berbasis server) untuk memverifikasi ketersediaan sesi login atau validitas data pemesanan sebelum mengizinkan pengguna masuk ke halaman sensitif seperti `seat.html`, `order.html`, atau `pay.html`.

### 4. Component Pattern (Reusable UI Components)
Pendekatan arsitektur modern berbasis JavaScript murni untuk menciptakan elemen UI yang dapat digunakan kembali (*reusable*). Elemen seperti `header.html` dan `footer.html` diinjeksikan secara programatik ke dalam DOM target menggunakan metode `.render()` dan `.mount()`. Hal ini meniru framework modern (seperti React/Vue) sehingga UI dikelola dari satu sumber utama (*single source of truth*).

Teknologi yang Digunakan

* **Struktur Halaman:** HTML5 (Struktur halaman terpisah untuk modularitas alur pengguna)
* **Desain Tampilan:** CSS3 (Desain layout yang responsif dan representasi visual denah kursi)
* **Logika & Pola Desain:** Vanilla JavaScript (ES6+ dengan penerapan *Module, State, Proxy, & Component Pattern*)
