<template>
  <div class="container">
      <!-- <hnav /> -->
      <h2>About</h2>
      <p>{{ title }}</p>
      <p>{{ reverseMessage }}</p>
      <button class="btn btn-dark" @click="reverseMethod('banana')" >Reverse</button>
      <br/>
      <span>{{ Message }}</span>
      <br/>
      <div class="form-group">
          <div class="input-group">
              <input v-model="Message" :maxlength="max" type="text" class="form-control" placeholder="input data langth 20"  />
              <div class="input-group-text" v-text="(max - Message.length)"></div>
          </div>
      </div>
     
      <br/>
      <nuxt-link to="/" class="btn btn-primary">Home</nuxt-link>
      <!-- <Postcontent /> -->
      <!-- <Nuxt /> -->
      <span v-if="checker1">Show data </span>
      <span v-else>Not show data </span>
       <br/>
       <!-- <button class="btn btn-dark" @click="getManga" >GetManga</button>  -->
        <!-- <nuxt-link
        v-for="photo in photos"
        :to="{ path: `/photos/${photo.id}` }"
        :key="photo.id"
        > -->

      <ol class="form-group">
           <span v-for="photo in photos" :key="photo.id" >
             <!-- <img :src ="photo.download_url" class="photo-item"> -->
            <li> {{ photo.author }} </li>
           </span>
      </ol>

       <ol class="form-group">
           <span v-for="manga in mangalist" :key="manga.mal_id" >
             <!-- <img :src ="photo.download_url" class="photo-item"> -->
            <li> {{ manga.title }} </li>
           </span>
      </ol>
     
     <div class="form-group">
          <div class="input-group">
              <input v-model="fulltag" type="text" class="form-control" @keydown.enter = "cuttagData" />
              <input v-model="model" type="text" class="form-control" />
              <input v-model="mcode" type="text" class="form-control" />
          </div>
     </div>
  </div>
</template>

<script>
// import hnav from '~/components/Hnavbar.vue'
// import Postcontent from '~/components/postcontent.vue'
import axios from 'axios'
export default {
    name:'AboutPage',
    // components: { hnav },
    layout : "corelayout" ,
    mounted(){
        console.log('state',this.$nuxt.$store.state);
    },
    data(){
        return{
            title : 'hello Thailand',
            checker1 : true,
            Message : '',
            max:20,
            fulltag:'',
            model:'',
            mcode:'',
            photos:[],
            mangalist :[],
        }
    },
    created(){
        this.getManga();
        this.getPhoto();
    },
    // async asyncData({$axios},callback) {
    //    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=12')
    //    .then((res) => {
    //         //  console.log(res);
    //          callback(null,{ photos : res.data});
    //     });
        
        // const mangalist = await axios.get('https://api.jikan.moe/v3/search/manga?q=Dragon&page=1');
        // .then((res) => { 
        //     console.log(res.data.results);
            
        // });
        // return {photos ,mangalist};
    // },
    // async asyncData({$axios},callback) {
    //     await $axios.$get('https://picsum.photos/v2/list?limit=12')
    //     .then((res) => {
    //         callback(null,{photos : res.data})
    //     })
    // },
    // async asyncData() {
    //     await axios.get('https://api.jikan.moe/v3/search/manga?q=Dragon&page=1')
    //     .then(res => { 
    //         console.log(res.data.results)
    //         // this.results = res.data.results
    //          })
    // },
    head:{
        title : 'this is head'
    },
    methods:{
        reverseMethod(prefix){
            this.title = (prefix + this.title)
                        .split('')
                        .reverse('')
                        .join('')
        },
        cuttagData(){
            // console.log((this.fulltag.match(/,/g) || []).length);
            if((this.fulltag.match(/,/g) || []).length === 2){
                const cut = this.fulltag.split(',');
                this.model = cut[0];
                this.mcode = cut[1];
                this.fulltag = '';
            }
        },
        async getManga(){
            await axios.get('https://api.jikan.moe/v3/search/manga?q=Dragon&page=1')
            .then((res) => { 
            console.log(res.data.results);
            this.mangalist = res.data.results;
            });
        },
        async getPhoto(){
            await axios.get('https://picsum.photos/v2/list?limit=12')
            .then((res) => {
             console.log(res.data);
             this.photos = res.data})
        },
        
    },
    computed:{
        reverseMessage(){
            return this.title
                        .split('')
                        .reverse('')
                        .join('');
        },
        fullname:{
            get(){
                return '';
            },
            set(val){
                const cut = val.split(',');
                this.model = cut[0];
                this.mcode = cut[1];
            }
        },
        drawer:{
            get()
            {
                return this.$nuxt.$store.state.drawer
            },set(val)
            {
                // get new value from store function set_drawer
                this.$store.commit('set_drawer',val)
            }
        }

    },
   
    
}
</script>

<style>
   
</style>