<template>
    <div>
      <div class="container mt-5">
        <h1 class="text-left text-danger">Formulario de Marcas</h1>
  
        <form @submit.prevent="enviarFormulario">
          <!-- Campo oculto para Id_Marcas (Clave Primaria) -->
          <input type="hidden" v-model="idMarcas" />
  
          <!-- Nombre de la Marca -->
          <div class="form-group">
            <label for="nombreMarca">Nombre de Marcas</label>
            <input
              type="text"
              id="nombreMarca"
              v-model="nombreMarca"
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
    name: "Marca",
    data() {
      return {
        idMarcas: null, // PK que puede ser asignada o generada automáticamente
        nombreMarca: '',
        mensajeExito: false
      };
    },
    methods: {
      enviarFormulario() {
        // Imprime los datos del formulario en la consola (puedes reemplazar con lógica de API)
        console.log("Formulario Enviado");
        console.log("ID Marca:", this.idMarcas);
        console.log("Nombre de la Marca:", this.nombreMarca);
  
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
        this.idMarcas = null;
        this.nombreMarca = '';
      }
    },
    mounted() {
     
      this.idMarcas = 1; // Simulación de valor para el campo ID 
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
  