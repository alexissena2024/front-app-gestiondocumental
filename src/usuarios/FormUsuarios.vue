<template>
  <div>
    <h5>Modulo de Usuarios</h5>
    <LayoutMain>
      <template #slotLayout1>

        <!-- Formulario de Usuarios -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="Nombre">
            <el-input v-model="form.nombre" placeholder="Ingresa el nombre"></el-input>
          </el-form-item>

          <el-form-item label="Apellido Paterno">
            <el-input v-model="form.apellidoPaterno" placeholder="Ingresa el apellido paterno"></el-input>
          </el-form-item>

          <el-form-item label="Apellido Materno">
            <el-input v-model="form.apellidoMaterno" placeholder="Ingresa el apellido materno"></el-input>
          </el-form-item>

          <el-form-item label="Cédula">
            <el-input v-model="form.cedula" placeholder="Ingresa la cédula"></el-input>
          </el-form-item>

          <!-- Selector para cargos -->
          <el-form-item label="Selecciona un cargo" class="form-item">
            <el-select v-model="selectedCargo" placeholder="Seleccione un cargo">
              <el-option
                v-for="cargo in cargos"
                :key="cargo.value"
                :value="cargo.value"
              />
            </el-select>
          </el-form-item>

          <!-- Botón de envío -->
          <el-form-item>
            <el-button type="primary" @click="submitForm">Guardar</el-button>
          </el-form-item>
        </el-form>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from '../components/LayoutMain.vue';
import { ref } from 'vue';

export default {
  components: {
    LayoutMain,
  },
  setup() {
    // Modelo de datos del formulario
    const form = ref({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      cedula: ''
    });

    // Variable reactiva para almacenar el cargo seleccionado
    const selectedCargo = ref('');

    // Arreglo de cargos
    const cargos = [
      { value: 'soporte_nivel_1', 
        
      },

      { value: 'soporte_nivel_2', 
      
      },

      { value: 'soporte_nivel_3_redes', 
        
      },

      { value: 'soporte_nivel_3_impresoras', 
      
      },

      { value: 'soporte_nivel_3_electricista', 
        
      },

      { value: 'coordinador',
       
      },

      { value: 'ingenieros',
       
       }
    ];

    // Función para manejar el envío del formulario
    const submitForm = () => {
      console.log('Datos del formulario:', form.value);
      console.log('Cargo seleccionado:', selectedCargo.value); // Muestra el cargo seleccionado
      // Aquí puedes manejar la lógica para guardar los datos
    };

    return {
      form,
      selectedCargo,
      cargos, // Asegúrate de retornar los cargos
      submitForm,
    };
  },
};
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.el-main {
  width: 400px;
}
</style>
