<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button class="btn brn-primary  float-right"
                    @click="exibirFormulario=!exibirFormulario">
                    <i class="fa fa-plus mr-2 "></i>    
                    <span>Criar</span>
                </button>
            </div>  
        </div>

        <ul class="list-group" v-if="tarefas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                :tarefa="tarefa" 
                @editar="selecionarTarefaParaEdicao"
                @deletar="deletarTarefa"/>
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TarefaSalvar 
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada"
            @criar="criarTarefa"
            @editar="editarTarefa"/>

    </div>
</template>

<script>

import axios from 'axios'

import config from './../config/config.js'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tarefas: [],
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    created(){
        axios.get(`${config.apiUrl}/tarefas`).then((response) => {
            console.log(response)
            this.tarefas = response['data']
        })
    },
    methods: {
        editarTarefa(tarefa){
            axios.put(`${config.apiUrl}/tarefas/${tarefa.id}`, tarefa).then((response) =>{
                console.log('put tarefas ', response)
                
                const indice = this.tarefas.findIndex( t => t.id === tarefa.id)
                this.tarefas.splice(indice, 1, response.data)
                
                this.resetar();
            })
        },
        criarTarefa(tarefa){
            axios.post(`${config.apiUrl}/tarefas`, tarefa).then((response) =>{
                console.log('Post tarefas ', response)
                this.tarefas.push(response.data)
                
            })
        },
        deletarTarefa(tarefa){

            const confirmar = window.confirm(`Deseja deletar a tarefa "${tarefa.id}"? `)
            if(confirmar){
            axios.delete(`${config.apiUrl}/tarefas/${tarefa.id}`, tarefa).then((response) =>{
                console.log('delete tarefas ', response)
                
                const indice = this.tarefas.findIndex( t => t.id === tarefa.id)
                this.tarefas.splice(indice, 1)
                
                this.resetar();
            })
            }

        },         
        resetar(){
            this.tarefaSelecionada = undefined
            this.exibirFormulario = false ;
        },
        selecionarTarefaParaEdicao(tarefa){
            this.tarefaSelecionada = tarefa
            this.exibirFormulario = true
        }       
    }
}
</script>
