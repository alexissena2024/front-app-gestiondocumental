<template>
  <div>
    <!-- Mostrar LayoutMain si el login es exitoso -->
    <component v-if="loginSuccessful" :is="layoutComponent" />

    <!-- Formulario de login si no se ha hecho login -->
    <el-container v-else>
      <el-header>
        <h2>Login</h2>
      </el-header>

      <el-main>
        <el-form :model="form" @submit.prevent="handleSubmit" label-width="100px">
          <el-form-item label="Username" prop="username" :rules="[{ required: true, message: 'Please input your username', trigger: 'blur' }]">
            <el-input v-model="form.username" placeholder="Enter Username" ref="usernameInput"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password" :rules="[{ required: true, message: 'Please input your password', trigger: 'blur' }]">
            <el-input v-model="form.password" placeholder="Enter Password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSubmit">Login</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      loginSuccessful: false, // Controla el estado del login
      layoutComponent: null // Se usará para cargar el componente LayoutMain dinámicamente
    };
  },
  methods: {
    async handleSubmit() {
      if (this.form.username === 'admin' && this.form.password === 'admin') {
        this.$message.success('Login successful!');
        this.loginSuccessful = true;

        // si el login es verdadero se importa el layoutMain
        const { default: LayoutMain } = await import('./LayoutMain.vue');
        this.layoutComponent = LayoutMain;
      } else {
        this.$message.error('Invalid username or password');
        this.$refs.usernameInput.focus();
        
        // Limpiar los campos
        this.resetForm();
      }
    },


    resetForm() {
      // Limpiar el formulario
      this.form.username = '';
      this.form.password = '';
    }
  }
};
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.el-main {
  width: 400px;
}
</style>
