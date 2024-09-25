<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-left text-danger">Formulario de Sala de Sistemas</h1>

      <form @submit.prevent="enviarFormulario">
        <!-- Campo oculto para Id_Sala_de_Sistemas (Clave Primaria) -->
        <input type="hidden" v-model="idSalaSistemas" />

        <!-- Nombre de la Sala de Sistemas -->
        <div class="form-group">
          <label for="nombreSalaSistemas">Nombre de la Sala de Sistemas</label>
          <input
            type="text"
            id="nombreSalaSistemas"
            v-model="nombreSalaSistemas"
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
  name: "SalaSistemas",
  data() {
    return {
      idSalaSistemas: null, // PK que puede ser asignada o generada automáticamente
      nombreSalaSistemas: '',
      mensajeExito: false
    };
  },
  methods: {
    enviarFormulario() {
      // Imprime los datos del formulario en la consola (puedes reemplazar con lógica de API)
      console.log("Formulario Enviado");
      console.log("ID Sala de Sistemas:", this.idSalaSistemas);
      console.log("Nombre de la Sala de Sistemas:", this.nombreSalaSistemas);

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
      this.idSalaSistemas = null;
      this.nombreSalaSistemas = '';
    }
  },
  mounted() {
    
    this.idSalaSistemas = 1; // Simulación de valor para el campo ID 
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

  