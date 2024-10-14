<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Localidad</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id_Localidad (Clave Primaria) -->
          <input type="hidden" v-model="idLocalidad" />
  
          <!-- Nombre de la Localidad -->
          <div class="form-group">
            <label for="nombreLocalidad">Nombre de la Localidad</label>
            <input
              type="text"
              id="nombreLocalidad"
              v-model="nombreLocalidad"
              class="form-control"
              required
            />
          </div>
  
          <!-- Botón de Envío -->
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
  
        <!-- Mostrar mensaje de éxito -->
        <p v-if="mensajeExito" class="text-success">Formulario enviado con éxito</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LocalidadForm",
    data() {
      return {
        idLocalidad: null, // PK que puede ser asignada o generada automáticamente
        nombreLocalidad: '',
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola (puedes reemplazar con lógica de API)
        console.log("Formulario Enviado");
        console.log("ID Localidad:", this.idLocalidad);
        console.log("Nombre de la Localidad:", this.nombreLocalidad);
  
        // Muestra un mensaje de éxito
        this.mensajeExito = true;
  
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito = false;
        }, 3000);
  
        // Limpiar los campos del formulario
        this.limpiarCampos();
      },
      limpiarCampos() {
        this.idLocalidad = null;
        this.nombreLocalidad = '';
      }
    },
    mounted() {
      // Si necesitas cargar un valor inicial para la clave primaria o cargar datos de una localidad existente, puedes hacerlo aquí
      this.idLocalidad = 1; // Simulación de valor para el campo ID (puedes cambiar esto según la lógica del backend)
    }
  };
  </script>
  
  <style scoped>
  .text-left {
    text-align: left;
  }
  
  .text-danger {
    color: red;
  }
  </style>
  