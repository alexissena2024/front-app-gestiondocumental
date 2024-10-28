<template>
    <div>
      <h1 class="titulo-azul">Módulo de creación de Cargos</h1>
  
      <!-- Formulario para agregar un cargo -->
      <el-form-item label="Agregar un cargo" class="form-item">
        <el-input
          ref="cargoInput"
          v-model="nuevoCargo"
          placeholder="Escribe un nuevo cargo"
          @input="convertirAMayusculas"
        />
        <el-button type="primary" @click="agregarCargo">
          {{ isEditing ? 'Actualizar Cargo' : 'Agregar Cargo' }}
        </el-button>
      </el-form-item>
  
      <!-- Selector para seleccionar un cargo -->
      <el-form-item label="Selecciona un cargo" class="form-item">
        <el-select v-model="selectedCargo" placeholder="Seleccione un cargo" @change="cargarCargo">
          <el-option
            v-for="cargo in cargos"
            :key="cargo.value"
            :label="cargo.label"
            :value="cargo.value"
          />
        </el-select>
        <el-button type="danger" @click="eliminarCargo" :disabled="!selectedCargo">Eliminar Cargo</el-button>
      </el-form-item>
  
      <!-- Tabla para mostrar la lista de cargos -->
      <el-table :data="cargos" style="width: 100%">
        <el-table-column prop="label" label="Cargos" />
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCargo: null, // Almacena el cargo seleccionado
        nuevoCargo: '',
        cargos: [], // Arreglo para almacenar los cargos agregados
        isEditing: false // Indica si se está editando un cargo
      };
    },
    methods: {
      // Método para convertir el texto a mayúsculas
      convertirAMayusculas() {
        this.nuevoCargo = this.nuevoCargo.toUpperCase(); // Convierte el texto a mayúsculas
      },
      agregarCargo() {
        if (this.nuevoCargo.trim() === '') {
          this.$message.error("Debe agregar un cargo para continuar.");
          this.$nextTick(() => this.$refs.cargoInput.focus());
          return;
        }
  
        const nuevo = {
          value: this.nuevoCargo.toLowerCase().replace(/\s+/g, '_'), // Se mantiene el formato en minúsculas para el valor
          label: this.nuevoCargo // Se almacena el nombre en mayúsculas
        };
  
        // Agregar o actualizar el cargo
        const index = this.cargos.findIndex(c => c.value === nuevo.value);
        if (index === -1) {
          this.cargos.push(nuevo); // Agregar nuevo cargo
        } else {
          this.cargos.splice(index, 1, nuevo); // Actualizar cargo existente
        }
  
        this.resetForm(); // Restablecer formulario
      },
      cargarCargo() {
        if (!this.selectedCargo) return;
  
        const cargo = this.cargos.find(c => c.value === this.selectedCargo);
        if (cargo) {
          this.nuevoCargo = cargo.label; // Cargar el cargo seleccionado para editar
          this.isEditing = true; // Activar el modo de edición
        }
      },
      eliminarCargo() {
        if (!this.selectedCargo) return;
  
        // Eliminar cargo seleccionado
        this.cargos = this.cargos.filter(c => c.value !== this.selectedCargo); 
        this.resetForm(); // Restablecer formulario
      },
      resetForm() {
        this.nuevoCargo = ''; // Limpiar el campo de entrada
        this.selectedCargo = null; // Reiniciar selección
        this.isEditing = false; // Desactivar el modo de edición
      }
    }
  };
  </script>
  
  <style scoped>
  .titulo-azul {
    color: #007bff; /* Color azul */
  }
  .form-item {
    margin-bottom: 20px;
  }
  </style>
  