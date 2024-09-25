<template>
    <div>
      <h1>Formulario de Discos Duros</h1>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label>Capacidad Disco Duro</label>
          <input type="text" v-model="capacidadDiscoDuro" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <!-- Mensaje de éxito -->
      <p v-if="mensajeExito" class="text-success">Formulario enviado con éxito</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DiscoDuroForm',
    data() {
      return {
        idDiscoDuro: null, // PK 
        capacidadDiscoDuro: '',
        mensajeExito: false,
      };
    },
    methods: {
      enviarFormulario() {
        console.log('Formulario Enviado');
        console.log('Capacidad Disco Duro:', this.capacidadDiscoDuro);
  
        this.mensajeExito = true;
  
        // Limpia los campos después de enviar el formulario
        this.limpiarCampos();
  
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito = false;
        }, 3000);
      },
      limpiarCampos() {
        this.capacidadDiscoDuro = '';
      },
    },
    mounted() {
      this.idDiscoDuro = 1; //simulacion con un ID
    },
  };
  </script>
  
  <style scoped>
  .text-success {
    color: green; /* Cambia el color del texto a verde */
  }
  </style>
  