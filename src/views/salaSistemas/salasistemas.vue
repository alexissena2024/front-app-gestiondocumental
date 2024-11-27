
<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Sala de Sistemas'" :tituloBoton="'Crear Salas'" :abrir="abrirFormulario" />

      <Formulario :titulo="'Gestión de Salas de Sistemas'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"
                  @save="guardarDatos" @update="actualizarDatos">


        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <FormSalaSistemas v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"
                         :dataValue="dataSalasistemasById" /> 
            </el-col>
          </el-row>
        </template>
      </Formulario>

        <!--los props deben ser iguales a como estan definidos en el formularios.vue-->
      <el-table :data="salasistemas" stripe style="width: 100%">
        <el-table-column prop="nom_salasistema" label="Sala de Sistemas" />
        <el-table-column fixed="right" label="Acciones" min-width="120">


          <template #default="registro">
            <el-button link type="primary" size="large" :icon="Edit"
                       @click="editarFormulario(registro.row.id)"> <!--Captura la FILA DE LA TABLA CON ROW Y EL ID es el del registro de la TABLA-->
            </el-button>
            <el-button link type="danger" :icon="Delete"
                       @click="eliminarSalasistemas(registro.row.id)"></el-button>
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

import FormSalaSistemas from './components/formSalaSistemas.vue';

const mostrarFormulario = ref(false);
const editandoFormulario = ref(false);
const formRef = ref();
const salasistemas = ref([]); // Lista de usuarios
const dataSalasistemasById = ref({}); // Detalle de un usuario por ID (valor inicial vacío)


const abrirFormulario = () => {
  mostrarFormulario.value = true
  editandoFormulario.value = false
}

const editarFormulario = async (id) => {
 
  dataSalasistemasById.value = await datosById(id);
  if (dataSalasistemasById.value) {
    mostrarFormulario.value = true;
    editandoFormulario.value = true;
  } else {
    ElMessage({ type: 'error', message: 'Error al cargar los datos de la Sala de Sistemas.' });
  }
};

// Crear una nueva sala de sistemas
const guardarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await crearSalasistemas();
  }
};


// Actualizar una sala de sistemas
const actualizarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await actualizarSalasistemas();
  }
};

const crearSalasistemas = async () => {
  

   const url = 'http://127.0.0.1:8000/api/Salasistema/save'
  const dataFormulario = formRef.value.formulario // Accedemos a los datos expuestos en formSalaSistemas
  console.log("Datos enviados al servidor:", dataFormulario);
  try {
   const response= await axios.post(url, dataFormulario)
   console.log('Respuesta del servidor:', response.data);

    formRef.value?.limpiarFormulario()
    ElMessage({ message: 'La Sala de Sistemas   se creó con éxito.', type: 'success' })
    datosSalasistemas()
    mostrarFormulario.value = false
  } catch (error) {
    console.error('Error al crear SALA de Sistemas:', error)
  }
}

const actualizarSalasistemas = async () => {
  

  const url = `http://127.0.0.1:8000/api/Salasistema/update`;
  const dataFormulario = {
    id: dataSalasistemasById.value[0].id,
    nom_salasistema: formRef.value.formulario.nom_salasistema, // este campo debe ser igual como esta definido en el prop de la tabla :data="salasistemas" 
   
  
  };
  

  try {
    const response = await axios.put(url, dataFormulario);
    console.log(response);
    formRef.value?.limpiarFormulario();
    ElMessage({ message: 'La Sala de Sistemas  se actualizo con éxito.', type: 'success' });
    datosSalasistemas();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al actualizar Sala Sistemas', error);
  }
};


const datosById = async (id) => {
  const url = 'http://127.0.0.1:8000/api/Salasistema/datosById';
  
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


const eliminarSalasistemas = async (id) => {
  const url = `http://127.0.0.1:8000/api/Salasistema/delete/${id}`;// ${id} es el id de la tabla dependencias  donde esta cada registro 
  ElMessageBox.confirm('¿Está seguro de eliminar la Sala de Sistemas?', 'Eliminar Registro', {
    confirmButtonText: 'SI',
    cancelButtonText: 'Cancelar',
    type: 'error',
  })
    .then(async () => {
      try {
        // await axios.delete(url, { data: { id } })
        await axios.delete(url);
        datosSalasistemas()
        ElMessage({ type: 'success', message: 'Se eliminó correctamente el registro' })
      } catch (error) {
        console.error('Error al eliminar el  Registro:', error)
      }
    })
    .catch(() => {
      ElMessage({ type: 'info', message: 'Eliminación cancelada' })
    })
}



const datosSalasistemas = async () => {
  const url = 'http://127.0.0.1:8000/api/Salasistema/getData'
  try {
    const response = await axios.get(url)
    salasistemas.value = response.data.data
  } catch (error) {
    console.error('Error al obtener la Sala de Sistemas:', error)
  }
}

onMounted(() => {
  // getAreas()
  datosSalasistemas()
})
</script>