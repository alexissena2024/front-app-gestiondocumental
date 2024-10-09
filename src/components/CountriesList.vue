<template>
    <div>
      <div v-for="country in countries" :key="country.name.common">
        <h3>{{ country.name.common }}</h3>
        <img :src="country.flags.png" :alt="country.name.common+ 'flag'"/>
        <h5>{{ country.flags.alt}}</h5>
      </div>

    
    </div>
  </template>
  


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
  </script>
  
  <style>
  </style>
  