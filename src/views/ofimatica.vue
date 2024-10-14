<template>
    <div>
      <h1>Formulario de Ofimática</h1>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombreOffice">Nombre Office Instalado</label>
          <select v-model="nombreOffice" class="form-control" required>
            <option disabled value="">Seleccione una opción</option>
            <option>Office 2016</option>
            <option>Office 2013</option>
            <option>Office 2021</option>
            <option>Office 365</option>
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
    name: 'OfimaticaForm',
    data() {
      return {
        idOfimatica: null, // PK que puede ser asignada o generada automáticamente
        nombreOffice: '',
        mensajeExito: false,
      };
    },
    methods: {
      enviarFormulario() {
        console.log('Formulario Enviado');
        console.log('Nombre Office Instalado:', this.nombreOffice);
  
        this.mensajeExito = true;
  
        // Limpia los campos después de enviar el formulario
        this.limpiarCampos();
  
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito = false;
        }, 3000);
      },
      limpiarCampos() {
        this.nombreOffice = '';
      },
    },
    mounted() {
      this.idOfimatica = 1; // Simulación de valor para el campo ID, si es necesario
    },
  };
  </script>
  
  <style scoped>
  .text-success {
    color: green; /* Cambia el color del texto a verde */
  }
  </style>
  