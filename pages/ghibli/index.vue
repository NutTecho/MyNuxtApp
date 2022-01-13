<template>
  <div class="container">
      <h1>{{ title }}</h1>
      <!-- <h3> {{ $route.params }}</h3>
      <h3> {{ $route.query }}</h3>
      <h3> {{ $route.hash }}</h3> -->
      <!-- <image v-bind:src="image"> -->

      <table class="table">
        <thead class="thead-dark">
            <th scope="col"> # </th>     
            <th scope="col"> Name </th>
            <th scope="col"> time(min) </th>      
            <th scope="col"> Year </th>
            <th scope="col"> Score </th>
            <th scope="col"> Detail </th>
        </thead>

        <tbody>
            <tr v-for="(movie , index) in movielist" :key="index" >
                <td> {{ index + 1}}</td>
                <td> {{movie.title}} </td>
                <td> {{movie.running_time}} </td>
                <td> {{movie.release_date}} </td>
                <td> {{movie.rt_score}} </td>
                <td>
                  <button class="btn btn-primary" @click="getpicture(index)">Detail </button>  
                </td>
                
             </tr>
        </tbody>  
      
      </table>
      
  </div>
</template>

<script>
export default {
    name : "GhibliIndex",
    layout : "corelayout",
    async asyncData({$axios}){
        const movielist = await $axios.$get('https://ghibliapi.herokuapp.com/films')
        return {movielist}
    },
    data(){
        return{
            title : "Ghibli Movie Catalog",
            picmovie : '',
            selectdIndex : 0,
        }
    },
    methods:{
        getpicture(index){
            this.selectdIndex = index;
            // console.log(JSON.stringify(this.movielist[0].value));
            this.$router.push({
            name : 'ghibli-id',
            params : {
                id : index
            },
            query : {
                q : index
          }
        })
        }

    },
    compute:{
        image(){
            JSON.stringify(this.movielist,(key,value) => {
                 if(key === "image")
                 {
                     return value[this.selectdIndex];
                 }
            })
            // return this.selectdIndex
        }

    }

}
</script>

<style>

</style>