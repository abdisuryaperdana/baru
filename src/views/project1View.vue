
<template>
<br><br><br><br><br>
<div class="card mb-3" style="max-width: 1550px;" >
  <div class="row g-0">
    <div class="col-md-4">
        <BaseImage src="prokon.png" class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Filter Air Otomatis Berbasis Arduino</h5>
        <p class="card-text">Pembuatan alat penyaring air secara otomatis menggunakan teknologi arduino sebagai microkontroler yang dapat menyaring air yang kotor menjadi bersih, dengan menggunakan
            dua kali tahap penyaringan yaitu filter alami dan filter Ultraviolet maka air dapat bersih dari kuman dan bakteri. Pembuatan alat ini bertujuan untuk menciptakan air yang
            bersih dan dapat diminum langsung sehingga menghemat pemakaian energi lain untuk sekedar menciptakan air bersih siap minum.</p>
            <p>
                Menggunakan sensor PH yang digunakan sebagai indikator pengukur kualitas PH air sehingga dapat ditentukan air dengan PH normal bisa diminum dengan aman, kemudian
            sensor Turbidity digunakan sebagai indikator pengukur tingkat kekeruhan air, pada alat kali ini saya membuat program apabila sensor Turbidity mendapat nilai kekeruhan
            air diatas angka 15 maka air tersebut masih tergolong kotor dan harus di filter kembali, namun apabila nilai kekeruhan air berada pada angka dibawah 15 maka air dapat dikatakan
            jernih dan akan dilakukan filter ultraviolet untuk membasmi kuman dan bakteri yang ada pada air tersebut.
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