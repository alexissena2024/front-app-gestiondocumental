<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Sede</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id_Sede (Clave Primaria) -->
          <input type="hidden" v-model="idSede" />
  
          <!-- Nombre de la Sede -->
          <div class="form-group">
            <label for="nombreSede">Nombre de la Sede</label>
            <input
              type="text"
              id="nombreSede"
              v-model="nombreSede"
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
    name: "Sede",
    data() {
      return {
        idSede: null, // PK que puede ser asignada o generada automáticamente
        nombreSede: '',
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola (puedes reemplazar con lógica de API)
        console.log("Formulario Enviado");
        console.log("ID Sede:", this.idSede);
        console.log("Nombre de la Sede:", this.nombreSede);
  
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
        this.idSede = null;
        this.nombreSede = '';
      }
    },
    mounted() {
      
      this.idSede = 1; // Simulación de valor para el campo ID (puedes cambiar esto según la lógica del backend)
    }
  };
  </script>
  
  <style scoped>
  .text-left {
    text-align: left; /* Alinea el texto a la izquierda */
  }
  
  .text-danger {
    color: red; /* Cambia el color del texto a rojo */
  }
  </style>
  