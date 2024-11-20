
<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Usuarios'" :tituloBoton="'Crear Usuarios'" :abrir="abrirFormulario" />

      <Formulario :titulo="'Gestión de Usuarios'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario"
                  @save="guardarDatos" @update="actualizarDatos">


        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <FormUsuarios v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"
                         :dataValue="dataUsuariosById" />
            </el-col>
          </el-row>
        </template>
      </Formulario>

      <el-table :data="usuarios" stripe style="width: 100%">
        <el-table-column prop="nombre" label="Nombre" />
        <el-table-column prop="apellidoMat" label="Apellido Materno" />
        <el-table-column prop="apellidoPat" label="Apellido Paterno" />
        <el-table-column prop="cedula" label="Cédula" />
        <el-table-column fixed="right" label="Acciones" min-width="120">


          <template #default="registro">
            <el-button link type="primary" size="large" :icon="Edit"
                       @click="editarFormulario(registro.row.id)"> <!--Captura la FILA DE LA TABLA CON ROW Y EL ID es el del registro de la TABLA-->
            </el-button>
            <el-button link type="danger" :icon="Delete"
                       @click="eliminarUsuario(registro.row.id)"></el-button>
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
import FormUsuarios from './components/formUsuarios.vue';

const mostrarFormulario = ref(false)
const editandoFormulario = ref(false)
const formRef = ref()
const usuarios = ref([]); // Lista de usuarios
const dataUsuariosById = ref(); // Detalle de un usuario por ID

// const areas = ref([])
// const cargos = ref([])

const abrirFormulario = () => {
  mostrarFormulario.value = true
  editandoFormulario.value = false
}

const editarFormulario = async (id) => {

  dataUsuariosById.value = await datosById(id)
  mostrarFormulario.value = true
  editandoFormulario.value = true
}

const guardarDatos = async () => {
  // alert("ESTOY AQUI")
  const validacion = await formRef.value?.validarFormulario()
  if (validacion) {
    await crearUsuario()
  }
}

const actualizarDatos = async () => {
  const validacion = await formRef.value?.validarFormulario()
  if (validacion) {
    await actualizarCargo()
  }
}

const crearUsuario = async () => {
  
  const url = 'http://127.0.0.1:8000/api/usuario/save'
  const dataFormulario = formRef.value.formulario // Accedemos a los datos expuestos en forusuarios
  try {
    await axios.post(url, dataFormulario)
    formRef.value?.limpiarFormulario()
    ElMessage({ message: 'El usuario se creó con éxito.', type: 'success' })
    datosUsuario()
    mostrarFormulario.value = false
  } catch (error) {
    console.error('Error al crear usuario:', error)
  }
}

const actualizarCargo = async () => {
  

  const url = `http://127.0.0.1:8000/api/usuario/actualizar`;
  const dataFormulario = {
    id: dataUsuariosById.value[0].id,
    nombre: formRef.value.formulario.nombre,
    apellidoMat: formRef.value.formulario.apellidoMat,
    apellidoPat: formRef.value.formulario.apellidoPat,
    cedula: formRef.value.formulario.cedula,
    
  };
  
  
  
  try {
    const response = await axios.put(url, dataFormulario);
    console.log(response);
    formRef.value?.limpiarFormulario();
    ElMessage({ message: 'El usuario se actualizo con éxito.', type: 'success' });
    datosUsuario();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
};


const datosById = async (id) => {
  const url = 'http://127.0.0.1:8000/api/usuario/datosById/';
  
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


const eliminarUsuario = async (id) => {
  const url = `http://127.0.0.1:8000/api/usuario/delete/${id}`;// ${id} es el id de la tabla USUARIO  donde esta cada registro 
  ElMessageBox.confirm('¿Está seguro de eliminar el cargo?', 'Eliminar Registro', {
    confirmButtonText: 'SI',
    cancelButtonText: 'Cancelar',
    type: 'error',
  })
    .then(async () => {
      try {
        // await axios.delete(url, { data: { id } })
        await axios.delete(url);
        datosUsuario()
        ElMessage({ type: 'success', message: 'Se eliminó correctamente el registro' })
      } catch (error) {
        console.error('Error al eliminar usuario:', error)
      }
    })
    .catch(() => {
      ElMessage({ type: 'info', message: 'Eliminación cancelada' })
    })
}

const datosUsuario = async () => {
  const url = 'http://127.0.0.1:8000/api/usuario/getData'
  try {
    const response = await axios.get(url)
    usuarios.value = response.data.data
  } catch (error) {
    console.error('Error al obtener usuario:', error)
  }
}

// const getAreas = async () => {
//   const url = 'http://127.0.0.1:8000/api/Area/getData'
//   try {
//     const response = await axios.get(url)
//     areas.value = response.data.data
//   } catch (error) {
//     console.error('Error al obtener áreas:', error)
//   }
// }

onMounted(() => {
  // getAreas()
  datosUsuario()
})
</script>