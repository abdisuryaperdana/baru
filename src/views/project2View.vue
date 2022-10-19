<template>
    <br><br><br><br><br>
    <div class="card mb-3" style="max-width: 1550px;" >
      <div class="row g-0">
        <div class="col-md-4">
            <BaseImage src="meka (3).png" class="img-fluid rounded-start"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Selenoid Door Lock with fingerprint and RFID</h5>
            <p class="card-text">Alat yang dapat membuka pintu otomatis menggunakan sidik jari dan ID dari ktp merupakan salah satu project yang pernah saya kerjakan untuk memenuhi tugas matakuliah 
            mekatronika. Dibuatnya alat ini dengan tujuan untuk memudahkan seseorang membuka pintu secara otomatis hanya dengan memanfaatkan sidik dari dan idcard ktp, hal
            ini juga merupakan sebuah keuntungan dan kemanan karena dengan adanya indikasi sidik jari untuk membuka pintu maka tidak bisa sembarang orang dapat membuka pintu tanpa
            adanya verifikasi sidik jari terlebih dahulu.
            </p>
            <p>
            Dengan menggunakan fingerprint sensor dapat dengan mudah merekam sekitar 100 buah sidik jari manusia dan dapat ditambah ketika ada pengguna lain ingin menggunakan produk ini,
            kemudian dengan adanya RFID juga memungkinkan membuka pintu menggunakan KTP sebagai kunci yang harus ditempelkan pada alat, ID yang ada pada KTP itulah yang akan diterjemahkan
            oleh alat menjadi sandi" kunci untuk membuka pintu, ini juga tidak bisa sembarang ktp untuk membuka pintu tanpa didaftarkan terlebih dahulu.
            </p>
            <p class="card-text"><small class="text-muted">Abdi Surya Perdana</small></p>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import BaseImage from '@/components/BaseImage.vue';
    </script>