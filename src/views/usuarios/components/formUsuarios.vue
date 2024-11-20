<template>
  <el-form ref="formRef" :model="formulario" :rules="rulesForm" label-width="auto" :size="formSize" status-icon>
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
  apellidoMat: '',
  apellidoPat: '',
  cedula: '',
})

// Función para cargar los datos en el formulario
const cargarDatosFormulario = () => {
  if (props.dataValue) {
    formulario.nombre = props.dataValue.nombre || ''
    formulario.apellidoMat = props.dataValue.apellidoMat || ''
    formulario.apellidoPat = props.dataValue.apellidoPat || ''
    formulario.cedula = props.dataValue.cedula || ''
  }
}

// Reglas de validación
const rulesForm = reactive({
  nombre: [{ required: true, message: 'Por favor ingrese el nombre', trigger: 'blur' }],
  apellidoMat: [{ required: true, message: 'Ingrese el apellido materno', trigger: 'blur' }],
  apellidoPat: [{ required: true, message: 'Ingrese el apellido paterno', trigger: 'blur' }],
  cedula: [{ required: true, message: 'Ingrese la cédula', trigger: 'blur' }],
})

// Función para limpiar el formulario
const limpiarFormulario = () => {
  formRef.value?.resetFields()
}

// Función para validar el formulario
const validarFormulario = () => {
  return new Promise((resolve) => {
    formRef.value?.validate((valid) => {
      if (valid) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

// Observador para detectar cambios en dataValue y cargar los datos
watch(
  () => props.dataValue,
  () => {
    cargarDatosFormulario()
  }
)

// Exponer métodos para usarlos en el componente principal
defineExpose({ validarFormulario, formulario, limpiarFormulario })
</script>

<style scoped></style>
