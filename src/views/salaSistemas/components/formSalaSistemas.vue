<template>
  <el-form 
    ref="formRef" 
    :model="formulario"
    :rules="rulesForm" 
    label-width="auto"
    :size="formSize" 
    status-icon>

    
    
    <el-form-item label="Nombre Sala de Sistemas" prop="nom_salasistema">
      <el-input v-model="formulario.nom_salasistema" />
    </el-form-item>

  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import salasistemas from '../salasistemas.vue';
import Salasistemas from '../salasistemas.vue';

const props = defineProps({
  nom_salasistema: { type: String, default: '' },
  
 
  Salasistemas: { 
    type: Array, 
    
  },
  dataValue: { type: Object, default: () => ({}) },
})

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nom_salasistema: '',
 
});


const cargarDatosFormulario = () => {
  //Trae todos los campos del formulario cuando se da CLICK en EDITAR*******
  {
    formulario.nom_salasistema = props.dataValue[0].nom_salasistema
    
  }
}




const rulesForm = reactive({
  nom_salasistema: [{ required: true, message: 'Por favor ingrese la Sala de Sistemas', trigger: 'blur' }],
 
 
});

const datosFormulario = () => {
  formulario.nom_salasistema = props.dataValue?.nom_salasistema || '';

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
