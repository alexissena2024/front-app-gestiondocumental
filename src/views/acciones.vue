<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-left text-danger">Formulario de Acciones</h1>

      <form @submit.prevent="enviarFormulario">
        <!-- Campo oculto para ID_Accion (Clave Primaria) -->
        <input type="hidden" v-model="idAccion" />

        <!-- Guardar -->
        <div class="form-group">
          <label for="guardar">Guardar</label>
          <input
            type="checkbox"
            id="guardar"
            v-model="guardar"
            class="form-control"
          />
        </div>

        <!-- Actualizar -->
        <div class="form-group">
          <label for="actualizar">Actualizar</label>
          <input
            type="checkbox"
            id="actualizar"
            v-model="actualizar"
            class="form-control"
          />
        </div>

        <!-- Modificar -->
        <div class="form-group">
          <label for="modificar">Modificar</label>
          <input
            type="checkbox"
            id="modificar"
            v-model="modificar"
            class="form-control"
          />
        </div>

        <!-- Eliminar -->
        <div class="form-group">
          <label for="eliminar">Eliminar</label>
          <input
            type="checkbox"
            id="eliminar"
            v-model="eliminar"
            class="form-control"
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
  name: "Acciones",
  data() {
    return {
      idAccion: null, // PK que puede ser asignada
      guardar: false,
      actualizar: false,
      modificar: false,
      eliminar: false,
      mensajeExito: false
    };
  },
  methods: {
    enviarFormulario() {
      console.log("Formulario Enviado");
      console.log("ID Acción:", this.idAccion);
      console.log("Guardar:", this.guardar);
      console.log("Actualizar:", this.actualizar);
      console.log("Modificar:", this.modificar);
      console.log("Eliminar:", this.eliminar);

      this.mensajeExito = true;

      // Oculta  el mensaje después de 3 segundos
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
    }
  },
  mounted() {
    // cargar dato SIMULADO*******
    this.idAccion = 2; // Simulando un valor para la PK
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
