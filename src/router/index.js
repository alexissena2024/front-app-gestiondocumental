import {createRouter, createWebHistory} from 'vue-router'
import Paises from '../views/paises/paises.vue'
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'
import Usuarios from '../views/usuarios/usuarios.vue'
import informes from '../views/informes/informes.vue'
import colegios from '../views/colegios/colegios.vue'
import salaSistemas from '../views/salaSistemas/salasistemas.vue'
import localidad from '../views/localidad/localidad.vue'
import sede from '../views/sede/sede.vue'
import dependencia from '../views/dependencia/dependencia.vue'
import cargos from '../views/cargos/cargos.vue'
import marcas from '../views/marcas/marcas.vue'
import modelos from '../views/modelos/modelos.vue'
import memorias from '../views/memorias/memorias.vue'
import discos from '../views/discos/discos.vue'
import ofimatica from '../views/ofimatica/ofimatica.vue'
import antivirus from '../views/antivirus/antivirus.vue'
const routes =[

{
    path:'/',
    name:'home',
    component:LayoutMain,
},
{
    path:'/login',
    name:'login',
    component:Login,
},

{
    path:'/cargos',
    name:'cargos',
    component:cargos,
},
{
    path:'/pais',
    name:'Paises',
    component: Paises,
},


{
    path:'/usuarios',
    name:'Usuarios',
    component: Usuarios,
},

{
    path:'/colegios',
    name:'Colegio',
    component: colegios,
},

{
    path:'/salasistemas',
    name:'Salasistemas',
    component: salaSistemas,
},

{
    path:'/localidad',
    name:'Localidad',
    component: localidad,
},

{
    path:'/sede',
    name:'Sede',
    component: sede,
},


{
    path:'/dependencia',
    name:'Dependencia',
    component: dependencia,
},

{
    path:'/marcas',
    name:'Marcas',
    component: marcas,
},
{
    path:'/modelos',
    name:'Modelos',
    component: modelos,
},
{
    path:'/memorias',
    name:'Memorias',
    component: memorias,
},

{
    path:'/discos',
    name:'Discos',
    component: discos,
},
{
    path:'/ofimatica',
    name:'Ofimatica',
    component: ofimatica,
},

{
    path:'/antivirus',
    name:'Antivirus',
    component: antivirus,
},



]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;