<template>
  <div class="container mt-5">
    <h1 class="text-left text-danger">Página de Usuarios</h1>

    <h3>Formulario de Registro</h3>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" v-model="nombre" ref="nombreInput" class="form-control input-custom" required />
      </div>
      <div class="form-group">
        <label>Apellidos</label>
        <input type="text" v-model="apellidos" class="form-control input-custom" required />
      </div>
      <div class="form-group">
        <label>Cédula</label>
        <input type="number" v-model="cedula" class="form-control input-custom" required />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <!-- MOSTRAR MENSAJE DE ÉXITO -->
    <p v-if="mensajeExito" class="text-success">Enviado con éxito</p>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  data() {
    return {
      nombre: '',
      apellidos: '',
      cedula: '',
      mensajeExito: false,
    };
  },
  methods: {
    enviarFormulario() {
      console.log('Formulario Enviado');
      console.log('Nombre:', this.nombre);
      console.log('Apellidos:', this.apellidos);
      console.log('Cédula:', this.cedula);

      this.mensajeExito = true;

      // Limpia los campos después de enviar el formulario
      this.limpiarCampos();

      // Opcional: ocultar el mensaje después de unos segundos
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000); // El mensaje desaparece después de 3 segundos
    },
    limpiarCampos() {
      this.nombre = '';
      this.apellidos = '';
      this.cedula = '';
      //  enfocar el campo de nombre
      this.$refs.nombreInput.focus();
    },
  },
  mounted() {
    // Establece el foco en el campo de nombre al cargar el componente
    this.$refs.nombreInput.focus();
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
