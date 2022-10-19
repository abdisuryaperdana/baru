<script setup>
import BaseImage from '@/components/BaseImage.vue';
</script>
<template>

<div class="container-fluid pt-5 pb-5 bg-light">
        <div class="container text-center">
          <br><br>
            <h2 class="display-3" id="portofolio">Portofolio</h2>
            <p>Berikut adalah beberapa project yang telah saya kerjakan dengan keahlian yang saya miliki
            </p>
            <div class="row pt-4 gx-4 gy-4">
                <div class="col-md-4">
                    <div class="card" style="width: 25rem;">
                        <BaseImage src="prokon.png" class="card-img-top" width="200" height="250"/>
                        <div class="card-body">
                          <h6 class="card-title">Filter Air Otomatis Berbasis Arduino</h6>
                          <p class="card-text"></p>
                          <RouterLink :to="{path:'project1'}" class="btn btn-info">View</RouterLink>
                        </div>
                      </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="width: 25rem;">
                      <BaseImage src="logo.jpg" class="card-img-top" width="200" height="250"/>
                        <div class="card-body">
                          <h6 class="card-title">Design Graphic</h6>
                          <p class="card-text"></p>
                          <RouterLink :to="{path:'project3'}" class="btn btn-info">View</RouterLink>
                        </div>
                      </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="width: 25rem;">
                      <BaseImage src="meka (2).png" class="card-img-top" width="200" height="250"/>
                        <div class="card-body">
                          <h6 class="card-title">Selenoid Door Lock with fingerprint and RFID</h6>
                          <p class="card-text"></p>
                          <RouterLink :to="{path:'project2'}" class="btn btn-info">View</RouterLink>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
  <RouterView />

</template>
