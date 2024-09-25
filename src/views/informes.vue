<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-left text-danger">Página de Informes</h1>

      <h3>Formulario de Registro</h3>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombreInforme">Nombre del Informe</label>
          <input
            type="text"
            id="nombreInforme"
            v-model="nombreInforme"
            ref="nominforme"
            class="form-control input-custom"
            required
          />
        </div>

        <div class="form-group">
          <label for="fechainicial">Fecha Inicial</label>
          <input
            type="date"
            id="fechainicial"
            v-model="fechainicial"
            class="form-control input-custom"
            required
          />
        </div>

        <div class="form-group">
          <label for="fechafinal">Fecha Final</label>
          <input
            type="date"
            id="fechafinal"
            v-model="fechafinal"
            class="form-control input-custom"
            required
          />
        </div>

        <div class="form-group">
          <label for="convertirpdf">Convertir PDF a Excel</label>
          <select
            id="convertirpdf"
            v-model="convertirpdf"
            class="form-control input-custom"
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>

      <!-- MOSTRAR MENSAJE DE ÉXITO -->
      <p v-if="mensajeExito" class="text-success">Enviado con éxito</p>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'informes',
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

      // Enfocar el campo de nombre informe
      nextTick(() => {
        this.$refs.nominforme.focus();
      });
    },
  },
  mounted() {
    // Establecer el foco en el campo de nombre informe al cargar el componente
    nextTick(() => {
      this.$refs.nominforme.focus();
    });
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
