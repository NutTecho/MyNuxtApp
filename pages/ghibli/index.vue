<template>
  <div class="container">
      <h1>{{ title }}</h1>
      <!-- <h3> {{ $route.params }}</h3>
      <h3> {{ $route.query }}</h3>
      <h3> {{ $route.hash }}</h3> -->
      <!-- <image v-bind:src="image"> -->
    <!-- <div v-for="(movie , index) in movielist" :key="index">
            <MovieCard :imagesource="movie.image">
                <template slot="cardtitle">
                    {{movie.title}}
                </template>
                 <template slot="cardyear">
                    {{movie.release_date}}
                </template>
                 <template slot="cardscore">
                    {{movie.rt_score}}
                </template>
                 <template slot="cardtime">
                    {{movie.running_time}}
                </template>
                <template slot="cardbody"> 
                    {{movie.description}}}
                </template>
                </MovieCard> 
        
          </div>
     -->

      <table class="table table-image" style="width:100%">
        <thead class="thead-dark">
            <tr>
                <th scope="col"> # </th>  
                <th scope="col"> Image </th>    
                <th scope="col"> Name </th>
                <th scope="col"> time(min) </th>      
                <th scope="col"> Year </th>
                <th scope="col"> Score </th>
                <th scope="col"> Detail </th> 
            </tr>
           
        </thead>

        <tbody>
            <tr v-for="(movie , index) in movielist" :key="index" >
                <th scope="row"> {{ index + 1}}</th>
                <td class="w-25" style="width : 100%;">
                    <b-img :src="movie.image" class="img-fluid" />
                </td>
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
// import MovieCard from '~/components/MovieCard.vue'
export default {
    name : "GhibliIndex",
    // components : { MovieCard },
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

<style lang="css">
.container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

.table-image {
  td, th {
    vertical-align: middle;
  }
}
</style>