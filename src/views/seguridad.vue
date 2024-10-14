<template>
  <div>
    

    <div class="container mt-5">
      <h1 class="text-left text-danger">Página de Seguridad</h1>

      <h3>Formulario de Registro</h3>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label>Cédula</label>
          <input type="number" v-model="cedula" ref="cedula" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <input type="password" v-model="contraseña" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Restablecer Contraseña</label>
          <input type="password" v-model="restablecerContraseña" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Políticas</label>
          <input type="text" v-model="politicas" class="form-control input-custom" required />
        </div>

        <div class="form-group">
          <label>Intentos</label>
          <input type="number" v-model="bloqueo" class="form-control input-custom" required />
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
  name: 'Seguridad',
  data() {
    return {
      cedula: '',
      contraseña: '',
      restablecerContraseña: '',
      politicas: '',
      bloqueo: '',
      mensajeExito: false,
    };
  },
  methods: {
    enviarFormulario() {
      console.log('Formulario Enviado');
      console.log('Cédula:', this.cedula);
      console.log('Contraseña:', this.contraseña);
      console.log('Restablecer Contraseña:', this.restablecerContraseña);
      console.log('Políticas:', this.politicas);
      console.log('Intentos de Bloqueo:', this.bloqueo);

      this.mensajeExito = true;

      // Limpia los campos después de enviar el formulario
      this.limpiarCampos();

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
    },
    limpiarCampos() {
      this.cedula = '';
      this.contraseña = '';
      this.restablecerContraseña = '';
      this.politicas = '';
      this.bloqueo = '';
      // Enfocar el campo de cédula
      this.$refs.cedula.focus();
    },
  },
  mounted() {
    // Establecer el foco en el campo de cédula al cargar el componente
    this.$refs.cedula.focus();
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
