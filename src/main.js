 import { createApp } from 'vue';
 import './style.css';
 import App from './App.vue'; // Importa el componente App
 import router from './router'; // Importa el enrutador

 const app = createApp(App); // Debes pasar el componente App
 app.use(router); // Usa el router
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