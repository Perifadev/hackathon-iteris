<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
=======
import HomeIs from "../views/HomeIs.vue"
import CadastroEmpresa from "../views/CadastroEmpresa.vue";
import FormCliente from "../views/FormCliente.vue";

const routes = [ {
  path: "/cadastroempresa",
  name: "Cadastro de Empresa",
  component: CadastroEmpresa,
},

{
  path: "/formcliente",
  name: "Formulário Cliente",
  component: FormCliente,
},
{
  path: "/home",
  name: "Home",
  component: HomeIs,
>>>>>>> 8710952065ad99b20949d1c451e6b418342e48ba

},
]

export default router
