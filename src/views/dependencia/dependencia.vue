
<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Dependencia'" :tituloBoton="'Crear Dependencias'" :abrir="abrirFormulario" />

      <Formulario :titulo="'Gestión de Dependencia'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"
                  @save="guardarDatos" @update="actualizarDatos">


        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <FormDependencia v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"
                         :dataValue="dataDependenciasById" />
            </el-col>
          </el-row>
        </template>
      </Formulario>

        <!--los props deben ser iguales a como estan definidos en el formularios.vue-->
      <el-table :data="dependencias" stripe style="width: 100%">
        <el-table-column prop="nomdependencia" label="Dependencia" />
        <el-table-column prop="piso" label="No. Piso" />
        <el-table-column fixed="right" label="Acciones" min-width="120">


          <template #default="registro">
            <el-button link type="primary" size="large" :icon="Edit"
                       @click="editarFormulario(registro.row.id)"> <!--Captura la FILA DE LA TABLA CON ROW Y EL ID es el del registro de la TABLA-->
            </el-button>
            <el-button link type="danger" :icon="Delete"
                       @click="eliminarDependencia(registro.row.id)"></el-button>
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

import FormDependencia from './components/formDependencia.vue';

const mostrarFormulario = ref(false);
const editandoFormulario = ref(false);
const formRef = ref();
const dependencias = ref([]); // Lista de usuarios
const dataDependenciasById = ref({}); // Detalle de un usuario por ID (valor inicial vacío)


const abrirFormulario = () => {
  mostrarFormulario.value = true
  editandoFormulario.value = false
}

const editarFormulario = async (id) => {
 
  dataDependenciasById.value = await datosById(id);
  if (dataDependenciasById.value) {
    mostrarFormulario.value = true;
    editandoFormulario.value = true;
  } else {
    ElMessage({ type: 'error', message: 'Error al cargar los datos de las Dependencias.' });
  }
};

// Crear una nueva dependencia
const guardarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await crearDependencia();
  }
};


// Actualizar un usuario existente
const actualizarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario();
  if (validacion) {
    await actualizarDependencia();
  }
};

const crearDependencia = async () => {
  

   const url = 'http://127.0.0.1:8000/api/Dependencia/save'
  const dataFormulario = formRef.value.formulario // Accedemos a los datos expuestos en formDependencia
  console.log("Datos enviados al servidor:", dataFormulario);
  try {
   const response= await axios.post(url, dataFormulario)
   console.log('Respuesta del servidor:', response.data);

    formRef.value?.limpiarFormulario()
    ElMessage({ message: 'La dependencia  se creó con éxito.', type: 'success' })
    datosDependencia()
    mostrarFormulario.value = false
  } catch (error) {
    console.error('Error al crear DEPENDENCIA:', error)
  }
}

const actualizarDependencia = async () => {
  

  const url = `http://127.0.0.1:8000/api/Dependencia/update`;
  const dataFormulario = {
    id: dataDependenciasById.value[0].id,
    nomdependencia: formRef.value.formulario.nomdependencia, // este campo debe ser igual como esta definido en el prop de la tabla :data="dependencia" 
    piso: formRef.value.formulario.piso, // este campo debe ser igual como esta definido en el prop de la tabla :data="dependencia" 
  
  };
  

  try {
    const response = await axios.put(url, dataFormulario);
    console.log(response);
    formRef.value?.limpiarFormulario();
    ElMessage({ message: 'La Dependencia se actualizo con éxito.', type: 'success' });
    datosDependencia();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al actualizar Dependencia', error);
  }
};


const datosById = async (id) => {
  const url = 'http://127.0.0.1:8000/api/Dependencia/datosById';
  
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


const eliminarDependencia = async (id) => {
  const url = `http://127.0.0.1:8000/api/Dependencia/delete/${id}`;// ${id} es el id de la tabla dependencias  donde esta cada registro 
  ElMessageBox.confirm('¿Está seguro de eliminar la Dependencia?', 'Eliminar Registro', {
    confirmButtonText: 'SI',
    cancelButtonText: 'Cancelar',
    type: 'error',
  })
    .then(async () => {
      try {
        // await axios.delete(url, { data: { id } })
        await axios.delete(url);
        datosDependencia()
        ElMessage({ type: 'success', message: 'Se eliminó correctamente el registro' })
      } catch (error) {
        console.error('Error al eliminar Registro de la Dependencia:', error)
      }
    })
    .catch(() => {
      ElMessage({ type: 'info', message: 'Eliminación cancelada' })
    })
}

const datosDependencia = async () => {
  const url = 'http://127.0.0.1:8000/api/Dependencia/getData'
  try {
    const response = await axios.get(url)
    dependencias.value = response.data.data
  } catch (error) {
    console.error('Error al obtener la Dependencia:', error)
  }
}

onMounted(() => {
  // getAreas()
  datosDependencia()
})
</script>