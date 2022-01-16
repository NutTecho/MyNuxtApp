<template>
<div>
    <h1>{{ JSON.stringify($route.query) }}</h1>
    <input v-model="query" class="text-field" placeholder="input number">
    <button class="btn btn-primary" @click="SearchClick">Click</button>
    <MovieCard >
      <template slot="cardtitle">
          This is title
      </template>
      <template slot="cardbody"> 
        this is body card
      </template>
    </MovieCard>
</div>

</template>

<script>
import MovieCard from '~/components/MovieCard.vue'
export default {
    name : "GhibliID",
    components : { MovieCard },
    layout : "corelayout",
    data(){
        return{
          query : '',
        }
    },
      fetch(){
        console.log("hello")
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