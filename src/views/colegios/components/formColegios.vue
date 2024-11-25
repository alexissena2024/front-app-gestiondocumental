<template>
  <el-form 
    ref="formRef" 
    :model="formulario"
    :rules="rulesForm" 
    label-width="auto"
    :size="formSize" 
    status-icon>

    
    
    <el-form-item label="Nombre del Colegio" prop="nombre_colegio">
      <el-input v-model="formulario.nombre_colegio" />
    </el-form-item>
  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import colegios from '../colegios.vue';

const props = defineProps({
  nombre_colegio: { type: String, default: '' },
 

  Colegios: { 
    type: Array, 
    
  },
  dataValue: { type: Object, default: () => ({}) },
})

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nombre_colegio: '',
 
});


const cargarDatosFormulario = () => {
  //Trae todos los campos del formulario cuando se da CLICK en EDITAR*******
  {
    formulario.nombre_colegio = props.dataValue[0].nombre_colegio
   
  }
}




const rulesForm = reactive({
  nombre_colegio: [{ required: true, message: 'Por favor ingrese nombre del Colegio', trigger: 'blur' }],
 
});

const datosFormulario = () => {
  formulario.nombre_colegio = props.dataValue?.nombre_colegio || '';

};
// watch(() => props.dataValue, datosFormulario);


watch(
  () => props.dataValue,
  (newData) => {
    cargarDatosFormulario();
  }
  
);


defineExpose({
  formulario,
  validarFormulario: () => formRef.value?.validate(),
  limpiarFormulario: () => formRef.value?.resetFields(),
});
</script>

<style scoped></style>
