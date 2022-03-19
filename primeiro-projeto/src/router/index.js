import Vue from "vue";
import VueRouter from "vue-router";
import HomeIs from "../views/HomeIs.vue"
import CadastroEmpresa from "../views/CadastroEmpresa.vue";
import FormCliente from "../views/FormCliente.vue";

Vue.use(VueRouter);

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

},
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
