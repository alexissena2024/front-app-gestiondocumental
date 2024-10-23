<template>
  <el-container style="height: 100vh;">
    <el-header>
      <NavBar />
    </el-header>

    <el-container>
      <el-aside width="400px">
        <!-- Contenido del aside -->
      </el-aside>

      <el-main class="main-container">
        <slot name="slotLayout1"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>

<style scoped>
.el-container {
  display: flex;
  flex-direction: column;  /* Asegura que el header esté en la parte superior */
}

.el-header {
  display: flex;
  justify-content: flex-start; /* Alineación del header a la izquierda */
  padding: 0;
  margin:0;
}

.main-container {
  display: flex;
  justify-content: flex-start; /* Alineación del contenido a la izquierda */
  align-items: flex-start;     /* Alineación en la parte superior */
  padding: 0;
  margin: 0;
  height: 100vh;
}
</style>
