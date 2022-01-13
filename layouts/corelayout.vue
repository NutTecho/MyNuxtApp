<template>
    <div>
        <b-navbar 
            toggleable="lg" 
            type="light" 
            variant="light" 
        >
        <b-navbar-brand href="/">MyWebApp</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav v-for="list in linklist" :key="list.id">
                        <b-nav-item :to="list.to">{{list.title}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <nuxt/>
    </div>
    
</template>
<script>
export default ({
   name: "NuxtCorelayout",
   data(){
       return{
           linklist : [
            { 
                id : 1,
                title : 'About',
                to : {name : 'about'}
            },
            {   
                id : 2,
                title : 'Buysock',
                to : {name: 'buysock' , query: {q: 'demo',x: 'hey'}, hash: '#test' }
            },
            {
                id : 3,
                title : 'Ghibli',
                to : {name : 'ghibli'}
            }]
       }
   },
   method:{

   },
   compute:{

   }
})
</script>



