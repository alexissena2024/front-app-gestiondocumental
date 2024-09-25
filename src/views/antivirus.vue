<template>
    <div>
      <h1 class="text-left text-danger">Formulario de Antivirus</h1>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombreAntivirus">Nombre Antivirus</label>
          <select v-model="nombreAntivirus" class="form-control" required>
            <option disabled value="">Seleccione una opción</option>
            <option>Defender</option>
            <option>Essentials</option>
          </select>
        </div>
  
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <!-- Mensaje de éxito -->
      <p v-if="mensajeExito" class="text-success">Formulario enviado con éxito</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AntivirusForm',
    data() {
      return {
        idAntivirus: null, // PK 
        nombreAntivirus: '',
        mensajeExito: false,
      };
    },
    methods: {
      enviarFormulario() {
        console.log('Formulario Enviado');
        console.log('Nombre Antivirus:', this.nombreAntivirus);
  
        this.mensajeExito = true;
  
        // Limpia los campos después de enviar el formulario
        this.limpiarCampos();
  
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito = false;
        }, 3000);
      },
      limpiarCampos() {
        this.nombreAntivirus = '';
      },
    },
    mounted() {
      this.idAntivirus = 1; // Simulación de valor para el campo ID
    },
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
  