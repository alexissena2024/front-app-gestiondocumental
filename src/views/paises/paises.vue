<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Paises'"
      :tituloBoton="'Crear Pais'"
      :abrir="abrirFormulario"
      />
      
       <!--Este formulario es el COMPONENTE**********************-->
      <Formulario :titulo="'Gestion de Paises'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"  >
        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

            <!--Traigo el componente llamado formpaises-->
          <formPaises   
            v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"  
          />
        </el-col>
      </el-row>
        </template>
      </Formulario>      
            <!--esta tabla la traigo de element *******************-->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Nombre" width="180" />
            <el-table-column prop="address" label="Direccion" width="180" />
            <el-table-column prop="phone" label="Telefono" />
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
  import  formPaises from './components/formPaises.vue'
  import Formulario from '../../components/Formulario.vue';
  import Header from '../../components/Header.vue';

  //Esta LIBRERIA DE icons-vue permite traer los diferentes ICONOS******************************
  import  {Delete,Edit} from "@element-plus/icons-vue"

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
    name: '2Oscar',
    address: 'No. 189, Grove St, Los Angeles',
    phone: '311555',
  }
]
  </script>