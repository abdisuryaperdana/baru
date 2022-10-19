<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import BaseImage from '@/components/BaseImage.vue';


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a outerling class="nav-link" href="#"><RouterLink to="/">Home</RouterLink></a>
        <a outerling class="nav-link" href="#"><RouterLink to="/project">Project</RouterLink></a>
        <a outerling class="nav-link" href="#"><RouterLink :to="{path:'contact'}">Contact</RouterLink></a>
      </div>
    </div>
  </div>
  </nav>
  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 100px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: right;
    margin-left: -0.5rem;
    font-size: 1.5rem;
    font-stretch: normal;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
