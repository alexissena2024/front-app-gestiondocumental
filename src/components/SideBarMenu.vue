<template>
  <el-menu
    :default-active="route.path"
    router
    class="el-menu-vertical-demo"
    background-color="#242629"
    text-color="#fff"
    collapse-transition
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>Administrador</span>
      </template>

      <el-menu-item index="personas">Personas</el-menu-item>
      <el-menu-item index="pais">Paises</el-menu-item>
      <el-menu-item index="cargos">Cargos</el-menu-item>
      <el-menu-item index="usuarios">Usuarios</el-menu-item>
      <el-menu-item index="colegios">Colegios</el-menu-item>
      <el-menu-item index="salasistemas">Sala Sistemas</el-menu-item>
      <el-menu-item index="dependencia">Dependencia</el-menu-item>
      <el-menu-item index="localidad">Localidad</el-menu-item>
      <el-menu-item index="informes">Informes</el-menu-item>
      <el-menu-item index="sede">Sedes</el-menu-item>
      <el-menu-item index="marcas">Marcas</el-menu-item>
      <el-menu-item index="modelos">Modelos</el-menu-item>
      <el-menu-item index="memorias">Memorias</el-menu-item>
      <el-menu-item index="discos">Discos</el-menu-item>
      <el-menu-item index="ofimatica">Ofimática</el-menu-item>
      <el-menu-item index="antivirus">Antivirus</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.el-menu-vertical-demo {
  width: 250px;
  min-height: 100%;
}
</style>
