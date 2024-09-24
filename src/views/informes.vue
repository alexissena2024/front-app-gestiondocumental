<template>

  <div>
    <div class="container mt-5">
      <h1 class="text-left text-danger">Página de Informes</h1>

      <h3>Formulario de Registro</h3>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label>Nombre del Informe</label>
          <input type="text" v-model="nombreInforme" ref="nominforme" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Fecha Inicial</label>
          <input type="date" v-model="fechainicial" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Fecha Final</label>
          <input type="date" v-model="fechafinal" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Convertir PDF a Excel</label>
          <input type="text" v-model="convertirpdf" class="form-control input-custom" required />
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>

      <!-- MOSTRAR MENSAJE DE ÉXITO -->
      <p v-if="mensajeExito" class="text-success">Enviado con éxito</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Informes',
  data() {
    return {
      nombreInforme: '',
      fechainicial: '',
      fechafinal: '',
      convertirpdf: '',
      mensajeExito: false,
    };
  },
  methods: {
    enviarFormulario() {
      console.log('Formulario Enviado');
      console.log('Nombre:', this.nombreInforme);
      console.log('Fecha Inicial:', this.fechainicial);
      console.log('Fecha Final:', this.fechafinal);
      console.log('Convertir PDF:', this.convertirpdf);
     

      this.mensajeExito = true;

      // Limpia los campos después de enviar el formulario
      this.limpiarCampos();

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
    },
    limpiarCampos() {
      this.nombreInforme = '';
      this.fechainicial = '';
      this.fechafinal = '';
      this.convertirpdf = '';
      
      // Enfocar el campo de cédula
      this.$refs.nominforme.focus();
    },
  },
  mounted() {
    // Establecer el foco en el campo de cédula al cargar el componente
    this.$refs.nominforme.focus();
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

  