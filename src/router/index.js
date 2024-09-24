import { createRouter, createWebHistory } from 'vue-router';

// Asegúrate de que estos componentes existan y se exporten correctamente
import Usuarios from '../views/usuarios.vue';
import Seguridad from '../views/seguridad.vue';
import Informes from '../views/informes.vue';
import Colegios from '../views/colegios.vue';
import Acciones from '../views/acciones.vue'; 
import SalaSistemas from '../views/SalaSistemas.vue'; 

// Definir todas las rutas en un solo arreglo
const routes = [
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
  },
  {
    path: '/seguridad',
    name: 'Seguridad',
    component: Seguridad,
  },
  {
    path: '/informes',
    name: 'Informes',
    component: Informes,
  },
  {
    path: '/acciones',
    name: 'Acciones',
    component: Acciones,
  },
  {
    path: '/colegios',
    name: 'Colegios',
    component: Colegios,
  },

  {
    path: '/salasistemas',
    name: 'SalaSistemas',
    component: SalaSistemas,
  }
];

// Crear el router con las rutas combinadas
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Exportar el router para su uso en la aplicación
export default router;

