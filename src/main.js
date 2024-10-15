 import { createApp } from 'vue';
 import './style.css';
 import App from './App.vue'; // Importa el componente App
 import router from './router'; // Importa el enrutador
 import ElementPlus from 'element-plus';
 import 'element-plus/dist/index.css'; //Este archivo permite manejar los entorno graficos de element plus




 const app = createApp(App); 

 app.use(ElementPlus);
 app.use(router);
 app.mount('#app'); // Monta la aplicación en el elemento con id 'app'


// var app = new Vue({
//     el: '#app',
//     data: {
//       respuesta: 0,
//       numero1: 0,
//       numero2:0,
//       nameButton:'Suma',
//     },


//   methods:{
//     sumar() {
//         this.respuesta = `Resultado: ${parseInt(this.numero1) + parseInt(this.numero2)}`;
//     }


//   }

//   })