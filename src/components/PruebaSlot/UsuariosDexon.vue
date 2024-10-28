<template>
    <el-form>
      <el-form-item label="Nombre">
        <el-input v-model="usuario.nombre"></el-input>
      </el-form-item>
  
      <el-form-item label="Apellidos">
        <el-input v-model="usuario.apellidos"></el-input>
      </el-form-item>
  
      <el-form-item label="Cédula">
        <el-input v-model="usuario.cedula"></el-input>
      </el-form-item>
  
      <!-- Aquí se inyecta el slot para sueldo y correo después del campo cédula -->
      <Sueldos @update-sueldo="updateSueldo" @update-correo="updateCorreo">
        <template #slot1>
          <!-- Contenido inyectado en el slot -->
           <H1>PRUEBA</H1>
        </template>
      </Sueldos>
  
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </el-form>
  </template>
  
  <script>
  import Sueldos from '../PruebaSlot/Sueldos.vue';  // Importamos el archivo correcto
  
  export default {
    components: {
      Sueldos
    },
    data() {
      return {
        usuario: {
          nombre: '',
          apellidos: '',
          cedula: '',
          correo: '',  // Campo correo
          sueldo: ''   // Campo sueldo
        }
      };
    },
    methods: {
      updateSueldo(value) {
        this.usuario.sueldo = value;
        // Guardar sueldo en localStorage
        localStorage.setItem('sueldo', value);
      },
      updateCorreo(value) {
        this.usuario.correo = value;
        // Guardar correo en localStorage
        localStorage.setItem('correo', value);
      },
      submitForm() {
        // Guardar todos los datos en localStorage
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
      }
    }
  };
  </script>
  