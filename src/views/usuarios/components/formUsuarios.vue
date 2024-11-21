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

    <el-form-item label="Apellido Materno" prop="apellidoMat">
      <el-input v-model="formulario.apellidoMat" />
    </el-form-item>

    <el-form-item label="Apellido Paterno" prop="apellidoPat">
      <el-input v-model="formulario.apellidoPat" />
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
  apellidoMat: { type: String, default: '' },
  apellidoPat: { type: String, default: '' },
  cedula: { type: String, default: '' },

  Usuarios: { 
    type: Array, 
    required: true 
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
  cedula: [{ required: true, message: 'Por favor ingrese su', trigger: 'blur' }],
});

const datosFormulario = () => {
  formulario.cargo = dataValue?.cargo || '';
  formulario.salario = dataValue?.salario || '';
  formulario.area = dataValue?.id_area || '';
};

watch(() => dataValue, datosFormulario);

defineExpose({
  formulario,
  validarFormulario: () => formRef.value?.validate(),
  limpiarFormulario: () => formRef.value?.resetFields(),
});
</script>

<style scoped></style>
