<template>
    <div>
    <h1 class="titulo-azul">Formulario de Configuración de Contraseña</h1>
      <el-form ref="passwordForm" :model="formData" :rules="rules">
        <el-form-item label="Contraseña" prop="password">
          <el-input
            v-model="formData.password"
            ref="passwordInput" 
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </el-form-item>
  
        <el-form-item label="Confirmar Contraseña" prop="confirmPassword">
          <el-input
            v-model="formData.confirmPassword"
            type="password"
            placeholder="Confirme su contraseña"
          />
        </el-form-item>
  
        <el-form-item>
          <el-button type="primary" @click="submitForm">Guardar</el-button>
          <el-button @click="resetForm">Restablecer</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          password: '',
          confirmPassword: '',
        },
        rules: {
          password: [
            { required: true, message: 'Por favor ingrese su contraseña.', trigger: 'blur' },
            { min: 6, message: 'La contraseña debe tener al menos 6 caracteres.', trigger: 'blur' },
          ],
          confirmPassword: [
            { required: true, message: 'Por favor confirme su contraseña.', trigger: 'blur' },
            { validator: this.validatePasswordMatch, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      // Validación personalizada para asegurar que las contraseñas coincidan
      validatePasswordMatch(rule, value, callback) {
        if (value !== this.formData.password) {
          callback(new Error('Las contraseñas no coinciden.'));
        } else {
          callback();
        }
      },
      // Método para enviar el formulario
      submitForm() {
        this.$refs.passwordForm.validate((valid) => {
          if (valid) {
            this.$message.success('Formulario guardado correctamente.');
          } else {
            this.$message.error('Por favor, complete el formulario correctamente.');
            return false;
          }
        });
      },
      // Método para restablecer el formulario y establecer el foco en contraseña
      resetForm() {
        this.$refs.passwordForm.resetFields(); // Restablece el formulario
        this.$nextTick(() => { // Espera a que el DOM se actualice
          this.$refs.passwordInput.focus(); // Establece el foco en el campo de contraseña
        });
      },
    },
  };
  </script>

<style scoped>
.titulo-azul {
  color: #007bff;
}
</style>