
<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Colegios'" :tituloBoton="'Crear Colegios'" :abrir="abrirFormulario" />

      <Formulario :titulo="'Gestión de Colegios'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"
                  @save="guardarDatos" @update="actualizarDatos">


        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <FormColegios v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"
                         :dataValue="dataColegiosById" />
            </el-col>
          </el-row>
        </template>
      </Formulario>

        <!--los props deben ser iguales a como estan definidos en el formularios.vue-->
      <el-table :data="colegios" stripe style="width: 100%">
        <el-table-column prop="nombre_colegio" label="Nombre del Colegio" />
       
        <el-table-column fixed="right" label="Acciones" min-width="120">


          <template #default="registro">
            <el-button link type="primary" size="large" :icon="Edit"
                       @click="editarFormulario(registro.row.id)"> <!--Captura la FILA DE LA TABLA CON ROW Y EL ID es el del registro de la TABLA-->
            </el-button>
            <el-button link type="danger" :icon="Delete"
                       @click="eliminarColegio(registro.row.id)"></el-button>
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
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios';

import FormColegios from './components/formColegios.vue';

const mostrarFormulario = ref(false);
const editandoFormulario = ref(false);
const formRef = ref();
const colegios = ref([]); // Lista de usuarios
const dataColegiosById = ref({}); // Detalle de un usuario por ID (valor inicial vacío)


const abrirFormulario = () => {
  mostrarFormulario.value = true
  editandoFormulario.value = false
}

const editarFormulario = async (id) => {
 
  dataColegiosById.value = await datosById(id);
  if (dataColegiosById.value) {
    mostrarFormulario.value = true;
    editandoFormulario.value = true;
  } else {
    ElMessage({ type: 'error', message: 'Error al cargar los datos del COLEGIO.' });
  }
};

// Crear un nuevo usuario
const guardarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await crearColegio();
  }
};


// Actualizar un usuario existente
const actualizarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await actualizarColegio();
  }
};

const crearColegio = async () => {
  

   const url = 'http://127.0.0.1:8000/api/Colegio/save'
  const dataFormulario = formRef.value.formulario // Accedemos a los datos expuestos en formColegios
  console.log("Datos enviados al servidor:", dataFormulario);
  try {
   const response= await axios.post(url, dataFormulario)
   console.log('Respuesta del servidor:', response.data);

    formRef.value?.limpiarFormulario()
    ElMessage({ message: 'El colegio  se creó con éxito.', type: 'success' })
    datosColegio()
    mostrarFormulario.value = false
  } catch (error) {
    console.error('Error al crear COLEGIO:', error)
  }
}

const actualizarColegio = async () => {
  

  const url = `http://127.0.0.1:8000/api/Colegio/update`;
  const dataFormulario = {
    id: dataColegiosById.value[0].id,
    nombre_colegio: formRef.value.formulario.nombre_colegio, // este campo debe ser igual como esta definido en el prop de la tabla :data="colegios" 
  };
  

  try {
    const response = await axios.put(url, dataFormulario);
    console.log(response);
    formRef.value?.limpiarFormulario();
    ElMessage({ message: 'El colegio se actualizo con éxito.', type: 'success' });
    datosColegio();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al actualizar colegio', error);
  }
};


const datosById = async (id) => {
  const url = 'http://127.0.0.1:8000/api/Colegio/datosById';
  
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


const eliminarColegio = async (id) => {
  const url = `http://127.0.0.1:8000/api/Colegio/delete/${id}`;// ${id} es el id de la tabla COLEGIO  donde esta cada registro 
  ElMessageBox.confirm('¿Está seguro de eliminar el Colegio?', 'Eliminar Registro', {
    confirmButtonText: 'SI',
    cancelButtonText: 'Cancelar',
    type: 'error',
  })
    .then(async () => {
      try {
        // await axios.delete(url, { data: { id } })
        await axios.delete(url);
        datosColegio()
        ElMessage({ type: 'success', message: 'Se eliminó correctamente el registro' })
      } catch (error) {
        console.error('Error al eliminar Registro del Colegio:', error)
      }
    })
    .catch(() => {
      ElMessage({ type: 'info', message: 'Eliminación cancelada' })
    })
}

const datosColegio = async () => {
  const url = 'http://127.0.0.1:8000/api/Colegio/getData'
  try {
    const response = await axios.get(url)
    colegios.value = response.data.data
  } catch (error) {
    console.error('Error al obtener Colegio:', error)
  }
}

onMounted(() => {
  // getAreas()
  datosColegio()
})
</script>