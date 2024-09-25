<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Memorias</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id Memorias (Clave Primaria) -->
          <input type="hidden" v-model="idMemorias" />
  
          <!-- Capacidad de Memorias -->
          <div class="form-group">
            <label for="capacidadMemoria">Capacidad de Memorias</label>
            <input
              type="text"
              id="capacidadMemoria"
              v-model="capacidadMemoria"
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
    name: "MemoriaForm",
    data() {
      return {
        idMemorias: null, // PK 
        capacidadMemoria: '',
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola
        console.log("Formulario Enviado");
        console.log("ID Memoria:", this.idMemorias);
        console.log("Capacidad de Memoria:", this.capacidadMemoria);
  
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
        this.idMemorias = null;
        this.capacidadMemoria = '';
      }
    },
    mounted() {
     
      this.idMemorias = 1; // Simulación de valor para el campo ID 
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
  