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

},
]

export default router
