<template>
<div>
    <!-- <b-row v-for="st in student" :key="st.name">  -->
    <b-row v-for="(st,index) in student" :key="index">    
        <span>{{st.name}} | {{st.age}}</span>
    </b-row>
    <div class="card-deck text-white">
        <div class="card bg-danger border-light mb-3" style="max-width: 20rem;">
            <div class="card-body">
                <h1 class="card-title text-right"><b>A</b></h1>
                <p class="card-text">Assembly Line </p>
                <ul class="list-group list-group-flush ">
                    <li class="list-group-item bg-danger">Target :</li>
                    <li class="list-group-item bg-danger">Plan :</li>
                    <li class="list-group-item bg-danger">Actual :</li>
                </ul>
            </div>
        </div>
         <div class="card bg-success border-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">Light card title</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
         <div class="card bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">Light card title</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name : 'NuxtPostcontent',
    data(){
        return {
             posts: [],
            student: [
                {name:"james",age: 10},
                {name:"jojo",age: 12},
                {name:"jack",age: 14},
                {name:"jim",age: 16},
                {name:"john",age: 18},
            ]

        }
    },
    
}
</script>