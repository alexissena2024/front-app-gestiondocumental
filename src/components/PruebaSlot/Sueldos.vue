<template>
    <div>
      <el-form-item label="Sueldo">
        <el-input v-model="sueldo"></el-input>
      </el-form-item>
      
      <el-form-item label="Correo">
        <el-input v-model="correo"></el-input>
      </el-form-item>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['update-sueldo', 'update-correo'], // Declaramos los eventos que emitimos
    data() {
      return {
        sueldo: '',  // Campo local para sueldo
        correo: ''   // Campo local para correo
      };
    },
    watch: {
      sueldo(newSueldo) {
        // Emitimos el evento cuando cambia el valor de sueldo
        this.$emit('update-sueldo', newSueldo);
      },
      correo(newCorreo) {
        // Emitimos el evento cuando cambia el valor de correo
        this.$emit('update-correo', newCorreo);
      }
    }
  };
  </script>
  