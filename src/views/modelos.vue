<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Modelos</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id_modelos (Clave Primaria) -->
          <input type="hidden" v-model="idModelos" />
  
          <!-- Nombre de los Modelos -->
          <div class="form-group">
            <label for="nombreModelo">Nombre de Modelos</label>
            <input
              type="text"
              id="nombreModelo"
              v-model="nombreModelo"
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
    name: "ModeloForm",
    data() {
      return {
        idModelos: null, // PK 
        nombreModelo: '',
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola
        console.log("Formulario Enviado");
        console.log("ID Modelo:", this.idModelos);
        console.log("Nombre de la Modelo:", this.nombreModelo);
  
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
        this.idModelos = null;
        this.nombreModelo = '';
      }
    },
    mounted() {
      
      this.idModelos = 1; // Simulación de valor para el campo ID 
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
  