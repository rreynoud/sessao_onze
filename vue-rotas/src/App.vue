<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">

      <router-link 
            to="/" 
            class="btn btn-info mb-2 mr-2"
            exact
            > Inicio </router-link>
      <router-link 
            to="/contatos" 
            class="btn btn-info mb-2 mr-2 "
            exact-active-class="active"            
            >Contatos</router-link>
      <router-view></router-view>

    </div>
    
  </div>
</template>
