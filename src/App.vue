<template>
  <div id="app">
    <router-view></router-view> <!-- Aquí se cargan las vistas según la ruta -->
    <CountriesList/>
  </div>
</template>

<script>
import CountriesList from './components/CountriesList.vue';

export default {
  name: 'App',

  components:{
    CountriesList

  }
};
</script>




<style scoped>
/* Agrega tus estilos aquí */
</style>
