<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Cargos'" :tituloBoton="'Crear Cargos deployd'" :abrir="abrirFormulario" />

      <Formulario :titulo="'Gestión de Cargos'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"
                  @save="guardarDatos" @update="actualizarDatos">
        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <FormCargos v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"
                          :areas="areas" :dataValue="dataCargosById" />
            </el-col>
          </el-row>
        </template>
      </Formulario>

      <el-table :data="cargos" stripe style="width: 100%">
        <el-table-column prop="nombre" label="Nombre" />
        <el-table-column prop="salario" label="Salario" />
        <el-table-column prop="area" label="Área" />
        <el-table-column fixed="right" label="Acciones" min-width="120">


          <template #default="registro">
            <el-button link type="primary" size="large" :icon="Edit"
                       @click="editarFormulario(registro.row.id)"> <!--Captura la FILA DE LA TABLA CON ROW Y EL ID es el del registro de la TABLA-->
            </el-button>
            <el-button link type="danger" :icon="Delete"
                       @click="eliminarCargo(registro.row.id)"></el-button>
          </template>

          
        </el-table-column>
      </el-table>
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import LayoutMain from '../../components/LayoutMain.vue';
import Formulario from '../../components/Formulario.vue';
import Header from '../../components/Header.vue';
import { Delete, Edit } from "@element-plus/icons-vue"
import FormCargos from './components/formCargos.vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios';

const mostrarFormulario = ref(false)
const editandoFormulario = ref(false)
const formRef = ref()
const dataCargosById = ref()
const areas = ref([])
const cargos = ref([])

const abrirFormulario = () => {
  mostrarFormulario.value = true
  editandoFormulario.value = false
}

const editarFormulario = async (id) => {

  dataCargosById.value = await datosById(id)
  mostrarFormulario.value = true
  editandoFormulario.value = true
}

const guardarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario()
  if (validacion) {
    await crearCargo()
  }
}

const actualizarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario()
  if (validacion) {
    await actualizarCargo()
  }
}

const crearCargo = async () => {
  
  const url = 'http://127.0.0.1:8000/api/Cargo/save'
  const dataFormulario = formRef.value.formulario // Accedemos a los datos expuestos en formCargos
  try {
    await axios.post(url, dataFormulario)
    formRef.value?.limpiarFormulario()
    ElMessage({ message: 'El cargo se creó con éxito.', type: 'success' })
    datosCargo()
    mostrarFormulario.value = false
  } catch (error) {
    console.error('Error al crear cargo:', error)
  }
}

const actualizarCargo = async () => {
  

  const url = `http://127.0.0.1:8000/api/Cargo/update`;
  const dataFormulario = {
    id: dataCargosById.value[0].id,
    nombre: formRef.value.formulario.nombre,
    salario: formRef.value.formulario.salario,
    area: formRef.value.formulario.area,
  };
  
  
  
  try {
    const response = await axios.put(url, dataFormulario);
    console.log(response);
    formRef.value?.limpiarFormulario();
    ElMessage({ message: 'El cargo se actualizó con éxito.', type: 'success' });
    datosCargo();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al actualizar cargo:', error);
  }
};


const datosById = async (id) => {
  const url = 'http://127.0.0.1:8000/api/Cargo/datosById/';
  
  try {
    const response = await axios.get(url, {
      params: {
        id: id
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener los datos por ID:', error);
  }
}


const eliminarCargo = async (id) => {
  const url = `http://127.0.0.1:8000/api/Cargo/delete/${id}`;// ${id} es el id de la tabla CARGOS  donde esta cada registro 
  ElMessageBox.confirm('¿Está seguro de eliminar el cargo?', 'Eliminar Registro', {
    confirmButtonText: 'SI',
    cancelButtonText: 'Cancelar',
    type: 'error',
  })
    .then(async () => {
      try {
        // await axios.delete(url, { data: { id } })
        await axios.delete(url);
        datosCargo()
        ElMessage({ type: 'success', message: 'Se eliminó correctamente el registro' })
      } catch (error) {
        console.error('Error al eliminar cargo:', error)
      }
    })
    .catch(() => {
      ElMessage({ type: 'info', message: 'Eliminación cancelada' })
    })
}

const datosCargo = async () => {
  const url = 'http://127.0.0.1:8000/api/Cargo/getData'
  try {
    const response = await axios.get(url)
    cargos.value = response.data.data
  } catch (error) {
    console.error('Error al obtener cargos:', error)
  }
}

const getAreas = async () => {
  const url = 'http://127.0.0.1:8000/api/Area/getData'
  try {
    const response = await axios.get(url)
    areas.value = response.data.data
  } catch (error) {
    console.error('Error al obtener áreas:', error)
  }
}

onMounted(() => {
  getAreas()
  datosCargo()
})
</script>
