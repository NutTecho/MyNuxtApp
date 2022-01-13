<template>
<div class="container">
    <div class="card bg-dark text-white">
        <div class="card-body">
            <h2 class="card-title">
                {{headtitle}}
            </h2>
            <p class="card-text">
                content :{{datacontent}}
                Price : {{getprice}}
                Shipping : {{Shipping}}
            </p>
            <button @click="addtoCart" class="btn btn-success">click</button>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    name : 'NuxtCardAssy',
    props :
    {
        headtitle:{
            type:String,
            default:null
            //required:true
        },
        datacontent:{
            type:String,
            //required:true
        },
        getprice:{
            type:Number,
            required:true,
        }
        
    },
    mounted(){
        console.log(JSON.stringify([this.headtitle,
            this.datacontent,this.getprice]));

        // console.warn();
        // console.error();
    },
    methods:{
        addtoCart(){
            this.$emit('add-to-cart');
        },
    },
    computed:{
        Shipping(){
            if(this.getprice)
            {
                return "no fee"
            }
            return 2.00
        }
    }
}
</script>