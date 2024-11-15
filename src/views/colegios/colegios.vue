<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Colegios'"
      :tituloBoton="'Crear Colegios'"
      :abrir="abrirFormulario"
      />
      
       <!--Este formulario es el COMPONENTE**********************-->
      <Formulario :titulo="'Gestion de Colegios'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"  >
        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

            <!--Traigo el componente llamado formColegios-->
          <FormColegios   
            v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"  
          />
        </el-col>
      </el-row>
        </template>
      </Formulario>      
            <!--esta tabla la traigo de element *******************-->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="nomColegio" label="Nombre del Colegio" width="250" />
            <el-table-column fixed="right" label="Acciones" min-width="120">

              <!--Esta tabla fue traida de ELEMENT PLUS*********-->
              <template #default>
                <el-button link type="primary" size="large" :icon="Edit" @click="editarFormulario" >                  
                </el-button>
                <el-button link type="danger" :icon="Delete" ></el-button>
              </template>
            </el-table-column>
          </el-table>
         
    </template>


    </LayoutMain>
  </template>
    
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue';
  import  formColegios from './components/formColegios.vue'
  import Formulario from '../../components/Formulario.vue';
  import Header from '../../components/Header.vue';

  //Esta LIBRERIA DE icons-vue permite traer los diferentes ICONOS******************************
  import  {Delete,Edit} from "@element-plus/icons-vue"
import FormColegios from './components/formColegios.vue';

  const mostrarFormulario = ref(false)//va ocultar el FORMULARIO******
  const editandoFormulario = ref(false)

  const abrirFormulario =()=>{
    mostrarFormulario.value=true
    editandoFormulario.value=false
  }

  const editarFormulario= async()=>{
    mostrarFormulario.value=true
    editandoFormulario.value=true
  }

  const tableData = [
  {
    nomColegio: 'JOSE MANUEL RESTREPO',
  }
]
  </script>