import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import Home from './views/contatos/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
//   mode:'history',
  linkActiveClass:'active',
  routes: [
    {path: '/contatos', component: Contatos}, //meus-contatos.com/contato
    {path: '/', component: Home} //meus-contatos
  ]
})

