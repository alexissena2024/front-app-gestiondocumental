
<!-- EJERCICIO DE BANDERAS CONSUMO API
<template>
    <div>
      <div v-for="country in countries" :key="country.name.common">
        <h3>{{ country.name.common }}</h3>
        <img :src="country.flags.png" :alt="country.name.common+ 'flag'"/>
        <h5>{{ country.flags.alt}}</h5>
      </div>

    
    </div>
  </template> -->

  <template>
    <div>
      <h1>Usuario Aleatorio</h1>
      <div v-if="user">
        <p>Nombre: {{ user.name.first }} {{ user.name.last }}</p>
        <p>Email: {{ user.email }}</p>
        <img :src="user.picture.large" alt="Imagen del usuario" />
      </div>
      <button @click="fetchRandomUser">Obtener nuevo usuario</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
      };
    },
    methods: {
      fetchRandomUser() {
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(data => {
            this.user = data.results[0];
          })
          .catch(error => {
            console.error('Error al obtener el usuario:', error);
          });
      },
    },
    mounted() {
      this.fetchRandomUser(); // Llama a la API cuando el componente se monte
    },
  };
  </script>
  








<!-- PARA EJERECICIO DE BANDERAS CONSUMO API 
  <script>
  export default {
    name: "CountriesList",
    data() {
      return {
        countries: []
      };
    },
    created() {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => {
          this.countries = json; // Asignar la respuesta al array posts
        });
    }
  };
  </script> -->
  






  <style>


  </style>
  