<template>
  <el-form 
    ref="formRef" 
    :model="formulario"
    :rules="rulesForm" 
    label-width="auto"
    :size="formSize" 
    status-icon>

    
    
    <el-form-item label="Nombre" prop="nombre">
      <el-input v-model="formulario.nombre" />
    </el-form-item>

    <el-form-item label="Apellido Materno" prop="apellMat">
      <el-input v-model="formulario.apellMat" />
    </el-form-item>

    <el-form-item label="Apellido Paterno" prop="apellPat">
      <el-input v-model="formulario.apellPat" />
    </el-form-item>

    <el-form-item label="Cédula" prop="cedula">
      <el-input v-model="formulario.cedula" />
    </el-form-item>
  
  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import Usuarios from '../usuarios.vue';

const props = defineProps({
  nombre: { type: String, default: '' },
  apellMat: { type: String, default: '' },
  apellPat: { type: String, default: '' },
  cedula: { type: String, default: '' },

  Usuarios: { 
    type: Array, 
    
  },
  dataValue: { type: Object, default: () => ({}) },
})

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nombre: '',
  apellMat: '',
  apellPat: '',
  cedula: '',
});

const rulesForm = reactive({
  nombre: [{ required: true, message: 'Por favor ingrese un nombre', trigger: 'blur' }],
  apellMat: [{ required: true, message: 'Por favor ingrese un apellido Materno', trigger: 'blur' }],
  apellPat: [{ required: true, message: 'Por favor ingrese un apellido Paterno', trigger: 'blur' }],
  cedula: [{ required: true, message: 'Por favor ingrese su cedula', trigger: 'blur' }],
});

const datosFormulario = () => {
  formulario.nombre = props.dataValue?.nombre || '';
  formulario.apellMat = props.dataValue?.apellMat || '';
  formulario.apellPat = props.dataValue?.apellPat || '';
  formulario.cedula = props.dataValue?.cedula || '';
};
watch(() => props.dataValue, datosFormulario);

defineExpose({
  formulario,
  validarFormulario: () => formRef.value?.validate(),
  limpiarFormulario: () => formRef.value?.resetFields(),
});
</script>

<style scoped></style>
