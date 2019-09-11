<template>
    <div>
        <h3 class="font-weight-light" >Contato</h3>
        <p>Cadastro de contato com vue + vue router</p>
        <button class="btn btn-secundary mt-4 b-4" @click="voltar" > Voltar </button>
    </div>
</template>

<script>
export default {
    methods:{
        voltar(event){
            this.$router.push("/")
        }
    }
}
</script>       