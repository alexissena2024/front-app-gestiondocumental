import { createRouter, createWebHistory } from 'vue-router';


import Usuarios from '../views/usuarios.vue';
import Seguridad from '../views/seguridad.vue';
import Informes from '../views/informes.vue';
import Colegios from '../views/colegios.vue';
import Acciones from '../views/acciones.vue'; 
import SalaSistemas from '../views/salasistemas.vue'; 
import Localidad from '../views/localidad.vue';
import Sede from '../views/sede.vue';
import Dependencia from '../views/dependencia.vue';
import Marca from '../views/marca.vue';
import Modelos from '../views/modelos.vue';
import Memorias from '../views/memorias.vue';
import Discoduro from '../views/discoduro.vue';
import Ofimatica from '../views/ofimatica.vue';
import Antivirus from '../views/antivirus.vue';
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'

// Definir todas las rutas en un solo arreglo
const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutMain,
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },


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
  },
  {
    path: '/localidad',
    name: 'Localidad',
    component: Localidad,
  },
  {
    path: '/sede',
    name: 'Sede',
    component: Sede,
  },
  {
    path: '/dependencia',
    name: 'Dependencia',
    component: Dependencia,
  },
  {
    path: '/marca',
    name: 'Marca',
    component: Marca,
  },
  {
    path: '/modelos',
    name: 'Modelos',
    component: Modelos,
  },
  {
    path: '/memorias',
    name: 'Memorias',
    component: Memorias,
  },

  {
    path: '/discoduro',
    name: 'Discoduro',
    component: Discoduro,
  },

  {
    path: '/ofimatica',
    name: 'Ofimatica',
    component: Ofimatica,
  },

  {
    path: '/antivirus',
    name: 'Antivirus',
    component: Antivirus,
  },
];

// Crear el router con las rutas combinadas
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exportar el router para su uso en la aplicación
export default router;