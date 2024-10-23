<template>
  <el-col :span="12" class="menu-container" style="padding: 0;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="border:none;"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Administrador</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>

        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Creación de Usuarios</span>
      </el-menu-item>

      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Configuración</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('Opened:', key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log('Closed:', key, keyPath);
};
</script>

<style scoped>
.menu-container {
  position: absolute;  /* Permitir el posicionamiento absoluto */
  left: 0;             /* Mover completamente hacia la izquierda */
  top:10;              /* Alinear hacia arriba si es necesario */
  padding: 0;          /* Eliminar padding */
  margin: 0;           /* Eliminar margen */
  height: 100vh;       /* Hacer que ocupe toda la altura de la pantalla */
}

.el-menu-vertical-demo {
  padding-top: 0;      /* Eliminar padding superior */
}
</style>
