<template>
    <div class="navbar-container">
      <NavBar />
    </div>
  </template>
  
  <script setup>
  import NavBar from './NavBar.vue';
  </script>
  
  <style scoped>
  .navbar-container {
    display: flex;               /* Usar flexbox para el alineamiento */
    justify-content: flex-start; /* Alineación a la izquierda */
    align-items: flex-start;     /* Alineación en la parte superior */
    padding: 0;                  /* Eliminar padding */
    margin: 0;                   /* Eliminar margen */
    margin-left: -680px; 
    margin-top:-50px;         /* Mover el contenedor hacia la izquierda (ajusta el valor según sea necesario) */
    height: 100vh;               /* Ocupa toda la altura de la vista */
    box-sizing: border-box;      /* Incluir padding y border en el tamaño total */
  }
  </style>
  
 
 
 
 
 
