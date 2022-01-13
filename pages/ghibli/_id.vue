<template>
<div>
    <h1>{{ JSON.stringify($route.query) }}</h1>
    <input v-model="query" class="text-field" placeholder="input number">
    <button class="btn btn-primary" @click="SearchClick">Click</button>
</div>

</template>

<script>
export default {
    name : "GhibliID",
    layout : "corelayout",
    data(){
        return{
          query : '',
        }
    },
    methods:
    {
      SearchClick(){
        // console.log('click with query'.this.query)
        // this.$router.replace({
        //   name : 'ghibli-id',
        //   query : {
        //     q : this.query
        //   }
        // })
        this.$router.push({
          name : 'ghibli-id',
          query : {
            q : this.query
          }
        })
      }
    }

}
</script>

<style>

</style>