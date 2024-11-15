<template>
  <el-form ref="formRef" :model="formulario" :rules="rulesForm" label-width="auto" :size="formSize" status-icon>
    <el-form-item label="Nombre" prop="nombre">
      <el-input v-model="formulario.nombre" />
    </el-form-item>
    <el-form-item label="Salario" prop="salario">
      <el-input v-model="formulario.salario" />
    </el-form-item>
    <el-form-item label="Área" prop="area">
      <el-select v-model="formulario.area" placeholder="Seleccione un área">
        <el-option v-for="area in areas" :key="area.nombre" :label="area.nombre" :value="area.nombre" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

const props = defineProps({
  areas: { 
    type: Array, 
    required: true 
  },
  dataValue: Object,
});

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nombre: '',
  salario: '',
  area: '',
})

// Función para cargar los datos en el formulario
const cargarDatosFormulario = () => {
  {
    formulario.nombre = props.dataValue[0].nombre
    formulario.salario = props.dataValue[0].salario
    formulario.area = props.dataValue[0].area 
  }
}

// Reglas de validación
const rulesForm = reactive({
  nombre: [{ required: true, message: 'Por favor ingrese el nombre', trigger: 'blur' }],
  salario: [{ required: true, message: 'Ingrese el salario', trigger: 'blur' }],
  area: [{ required: true, message: 'Seleccione un valor', trigger: 'change' }]
})

// Función para limpiar el formulario
const limpiarFormulario = () => {
  formRef.value.resetFields()
}

// Función para validar el formulario
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
  (newData) => {
    cargarDatosFormulario();
  }
  
);

// Exponer métodos para usarlos en el componente principal
defineExpose({ validarFormulario, formulario, limpiarFormulario,watch })

</script>

<style scoped></style>

