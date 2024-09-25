<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-left text-danger">Formulario de Colegios</h1>

      <form @submit.prevent="enviarFormulario">
        <!-- Campo oculto para Id_Colegios (Clave Primaria) -->
        <input type="hidden" v-model="idColegios" />

        <!-- Nombre del Colegio -->
        <div class="form-group">
          <label for="nombreColegios">Nombre del Colegio</label>
          <input
            type="text"
            id="nombreColegios"
            v-model="nombreColegios"
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
  name: "Colegios",
  data() {
    return {
      idColegios: null, // PK que puede ser asignada o generada automáticamente
      nombreColegios: '',
      mensajeExito: false
    };
  },
  methods: {
    enviarFormulario() {
      // Imprime los datos del formulario en la consola (puedes reemplazar con lógica de API)
      console.log("Formulario Enviado");
      console.log("ID Colegios:", this.idColegios);
      console.log("Nombre del Colegio:", this.nombreColegios);

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
      this.idColegios = null;
      this.nombreColegios = '';
    }
  },
  mounted() {
    // Si mular  datos para un id de colegio
    this.idColegios = 2; 
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
