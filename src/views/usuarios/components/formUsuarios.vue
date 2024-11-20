<template>
  <el-form 
    ref="formRef" 
    :model="formulario"
    :rules="rulesForm" 
    label-width="auto"
    :size="formSize" 
    status-icon>

     <el-form-item label="Cédula" prop="cedula">
      <el-input v-model="formulario.cedula" />
    </el-form-item>
    
    <el-form-item label="Nombre" prop="nombre">
      <el-input v-model="formulario.nombre" />
    </el-form-item>
    
    <el-form-item label="Apellido Materno" prop="apellMat">
      <el-input v-model="formulario.apellMat" />
    </el-form-item>
    
    <el-form-item label="Apellido Paterno" prop="apellPat">
      <el-input v-model="formulario.apellPat"/>
    </el-form-item>

   
  
  </el-form>
</template>

<script setup>
import { reactive, ref, watch, defineProps, defineExpose } from 'vue';

 const { areas, dataValue } = defineProps({
  areas: Array,
  dataValue: Object,
 });

const formSize = ref('default');
const formRef = ref(null);
const formulario = reactive({
  cedula: '',
 nombre: '',
  apellMat: '',
  apellPat: '',
});

const rulesForm = reactive({
  cedula: [{ required: true, message: 'Por favor ingrese su', trigger: 'blur' }],
  nombre: [{ required: true, message: 'Por favor ingrese un nombre', trigger: 'blur' }],
  apellMat: [{ required: true, message: 'Por favor ingrese un apellido Materno', trigger: 'blur' }],
  apellPat: [{ required: true, message: 'Por favor ingrese un apellido Paterno', trigger: 'blur' }],
  
});

const datosFormulario = () => {
  formulario.cedula = dataValue?.cedula || '';
  formulario.nombre = dataValue?.nombre || '';
  formulario.apellMat = dataValue?.apellMat || '';
  formulario.apellPat = dataValue?.apellPat || '';
};

watch(() => dataValue, datosFormulario);

defineExpose({
  formulario,
  validarFormulario: () => formRef.value?.validate(),
  limpiarFormulario: () => formRef.value?.resetFields(),
});
</script>

<style scoped></style>
