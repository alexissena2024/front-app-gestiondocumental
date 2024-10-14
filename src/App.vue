<<<<<<< HEAD
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
=======
<template>
  <div id="app">
    <router-view></router-view> <!-- Aquí se cargan las vistas según la ruta -->
    <!-- <CountriesList/> -->
     <UsersRandom />
  </div>
</template>

<script>
 import UsersRandom from './components/UsersRandom.vue';
// import CountriesList from './components/CountriesList.vue';
export default {
  name: 'App',

  components:{
    // CountriesList
    UsersRandom

  }
};
</script>




<style scoped>
/* Agrega tus estilos aquí */
>>>>>>> future/configuration
</style>
