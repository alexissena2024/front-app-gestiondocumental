<template>
  <h1>Formulario de Seguridad</h1>
  <LayoutMain>
      <template #slotLayout1>
          <h6>Modulo de Seguridad</h6>

          <el-form :model="form" label-width="150px" class="seguridad-form">
              <el-form-item label="ID Seguridad">
                 <el-input v-model="form.id_seguridad" disabled />
              </el-form-item>

             <el-form-item label="Cédula">
                  <el-select v-model="form.cedulaFK" placeholder="cédula"> 
                  </el-select>
             </el-form-item>

              <el-form-item label="Contraseña" required>
                <el-input
                        v-model="form.contraseña"
                        type="password"
                         placeholder="Ingrese la contraseña"
                  />
              </el-form-item>

              <el-form-item label="Restablecer Contraseña">
                  <el-input
                       v-model="form.restablecer_contraseña"
                       type="password"
                       placeholder="Ingrese la nueva contraseña"
                    />
              </el-form-item>

                  <el-form-item label="Políticas de Expiración">
                     <el-input
                          v-model="form.politicas_expiracion"
                          placeholder="Ingrese las políticas de expiración"
                      />
                   </el-form-item>

                     <el-form-item label="Bloqueo de Intentos">
                                <el-input
                                 v-model="form.bloqueo_intentos"
                                type="number"
                                 placeholder="Ingrese el número de intentos permitidos"
                                  />
                       </el-form-item>

                   <el-form-item>
                          <el-button type="primary" @click="submitForm">Guardar</el-button>
                           <el-button @click="resetForm">Restablecer</el-button>
                          </el-form-item>
                   </el-form>

        </template>
  </LayoutMain>  
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMain from '../components/LayoutMain.vue';

// Aquí se cargaran  los datos de los usuarios


const form = ref({
  id_seguridad: null, // Este campo se debe llenar según sea necesario
  cedulaFK: '',
  contraseña: '',
  restablecer_contraseña: '',
  politicas_expiracion: '',
  bloqueo_intentos: 0,
});

// Función para enviar el formulario
const submitForm = () => {
  console.log('Formulario enviado:', form.value);
  // Aquí se  agregara la lógica para enviar los datos al servidor
};

// Función para restablecer el formulario
const resetForm = () => {
  form.value = {
    id_seguridad: null,
    cedulaFK: '',
    contraseña: '',
    restablecer_contraseña: '',
    politicas_expiracion: '',
    bloqueo_intentos: 0,
  };
};
</script>

<style scoped>
.seguridad-form {
  max-width: 600px; /* ANCHO DEL FORMULARIO*/
}
</style>
