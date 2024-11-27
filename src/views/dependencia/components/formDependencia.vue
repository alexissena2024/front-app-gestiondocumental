<template>
  <el-form 
    ref="formRef" 
    :model="formulario"
    :rules="rulesForm" 
    label-width="auto"
    :size="formSize" 
    status-icon>

    
    
    <el-form-item label="Dependencia" prop="nomdependencia">
      <el-input v-model="formulario.nomdependencia" />
    </el-form-item>

    <el-form-item label="Piso" prop="piso">
      <el-input v-model="formulario.piso" />
    </el-form-item>

  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import Dependencia from '../dependencia.vue';

const props = defineProps({
  nomdependencia: { type: String, default: '' },
  piso: { type: String, default: '' },
 

  Dependencia: { 
    type: Array, 
    
  },
  dataValue: { type: Object, default: () => ({}) },
})

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nomdependencia: '',
  piso: '',

});


const cargarDatosFormulario = () => {
  //Trae todos los campos del formulario cuando se da CLICK en EDITAR*******
  {
    formulario.nomdependencia = props.dataValue[0].nomdependencia
    formulario.piso = props.dataValue[0].piso
  }
}




const rulesForm = reactive({
  nomdependencia: [{ required: true, message: 'Por favor ingrese la dependencia', trigger: 'blur' }],
  piso: [{ required: true, message: 'Por favor ingrese el piso donde está ubicado', trigger: 'blur' }],
 
});

const datosFormulario = () => {
  formulario.nomdependencia = props.dataValue?.nomdependencia || '';
  formulario.piso = props.dataValue?.piso || '';
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
