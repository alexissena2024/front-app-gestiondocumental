<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Dependencia</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id_dependencia (Clave Primaria) -->
          <input type="hidden" v-model="idDependencia" />
  
          <!-- Nombre de la Dependencia -->
          <div class="form-group">
            <label for="nombreDependencia">Nombre Dependencia</label>
            <input
              type="text"
              id="nombreDependencia"
              v-model="nombreDependencia"
              class="form-control"
              required
            />
          </div>
  
          <!-- Piso -->
          <div class="form-group">
            <label for="piso">Piso</label>
            <input
              type="number"
              id="piso"
              v-model="piso"
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
    name: "Dependencia",
    data() {
      return {
        idDependencia: null, // PK que puede ser asignada 
        nombreDependencia: '',
        piso: null, // Almacena el número de piso
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola 
        console.log("Formulario Enviado");
        console.log("ID Dependencia:", this.idDependencia);
        console.log("Nombre de la Dependencia:", this.nombreDependencia);
        console.log("Piso:", this.piso);
  
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
        this.idDependencia = null;
        this.nombreDependencia = '';
        this.piso = null; // Limpia el campo de piso
      }
    },
    mounted() {
      
      this.idDependencia = 1; // Simulación de valor para el campo ID
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
  