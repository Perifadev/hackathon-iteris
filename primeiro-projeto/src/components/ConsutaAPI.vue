<template>
   
</template>

<script>
export default {
    name: 'ConsutaAPI',
    data(){
        return{
            ConsutaAPI: []
        }
    },
    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then (resultado => resultado.json())
        .then(json=> {
            this.ConsutaAPI = json
        })

}
</script>

<style scoped>

</style>>

