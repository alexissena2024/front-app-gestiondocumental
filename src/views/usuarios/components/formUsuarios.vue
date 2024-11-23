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

    <el-form-item label="Apellido Materno" prop="apellido_materno">
      <el-input v-model="formulario.apellido_materno" />
    </el-form-item>

    <el-form-item label="Apellido Paterno" prop="apellido_paterno">
      <el-input v-model="formulario.apellido_paterno" />
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
  apellido_materno: { type: String, default: '' },
  apellido_paterno: { type: String, default: '' },
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
  apellido_materno: '',
  apellido_paterno: '',
  cedula: '',
});


const cargarDatosFormulario = () => {
  //Trae todos los campos del formulario cuando se da CLICK en EDITAR*******
  {
    formulario.nombre = props.dataValue[0].nombre
    formulario.apellido_materno = props.dataValue[0].apellido_materno
    formulario.apellido_paterno = props.dataValue[0].apellido_paterno
    formulario.cedula = props.dataValue[0].cedula
  }
}




const rulesForm = reactive({
  nombre: [{ required: true, message: 'Por favor ingrese un nombre', trigger: 'blur' }],
  apellido_materno: [{ required: true, message: 'Por favor ingrese un apellido Materno', trigger: 'blur' }],
  apellido_paterno: [{ required: true, message: 'Por favor ingrese un apellido Paterno', trigger: 'blur' }],
  cedula: [{ required: true, message: 'Por favor ingrese su cedula', trigger: 'blur' }],
});

const datosFormulario = () => {
  formulario.nombre = props.dataValue?.nombre || '';
  formulario.apellido_materno = props.dataValue?.apellido_materno || '';
  formulario.apellido_paterno = props.dataValue?.apellido_paterno || '';
  formulario.cedula = props.dataValue?.cedula || '';
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
