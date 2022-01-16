<template>
        <div>
            <h2>{{JSON.stringify($route.params)}}</h2>
            <h2>{{JSON.stringify($route.query)}}</h2>
            <h2>{{JSON.stringify($route.hash)}}</h2>


            <div class="product">
                <div class="product-image">
                    <img v-bind:src="image">
                </div>
            </div>

            <div class="product-info">
                <h2>{{title}}</h2>
            </div>

           <div v-for="(ls,index) in listimage" :key="ls.id"
           class="color-circle" 
           :style="{backgroundColor : ls.color}">
            <p @mouseover="updateProduct(index)">
                {{ls.color}}
            </p>
           </div>
           <p>item stock : {{stock}}</p>
           <p v-if="stock > 5">In Stock</p>
           <p v-else-if="stock <= 5 && stock > 0">Almost sold out</p>
           <p v-else>sold out</p>
           <button v-on:click="addstock" 
                    >add</button>
           <button @click="soldstock"
                    :disabled="!state">sold</button>
            <div>
            <Cardassy 
            headtitle="testprops" 
            datacontent="xxxxx"
            getprice="50"
            @add-to-cart = "addstock"
             />
            <!-- <Tabbasic ></Tabbasic> -->
            <!-- <ChartLine></ChartLine> -->
        </div>
     </div>
</template>
<script>
// import Cardassy from '~/components/cardassy.vue';
// import Tabbasic from '~/components/tabbasic.vue';
// import ChartLine from '~/components/chartline.vue';
export default {
    name : 'BuySockPage',
    // components:{ Cardassy,Tabbasic},
    layout : "corelayout" ,
    data(){
        return {
            state : true,
            stock : 5,
            product:"Sock",
            selectdIndex : 0,
            listimage:[
                {id:1,pname:'green sock',color:'green',prodimage:require("@/assets/image/green-sock.jpg")},
                {id:2,pname:'blue sock',color:'blue',prodimage:require("@/assets/image/blue-sock.jpg")}
            ],
        }
    },
    methods:
    {
        // checkif(){
        //     this.state !== this.state;
        // },
        soldstock(){
            this.stock -= 1;
            if(this.stock === 0){this.state = false}
        },
        addstock(){
            this.stock += 1;
            if(this.stock > 0){this.state = true}
        },
        updateProduct(index)
        {
            this.selectdIndex = index;
            console.log(index);
        },
            
    },
    computed:{
        title(){
            return this.product + ' ' + 'Instock'
        },
        image(){
            return this.listimage[this.selectdIndex].prodimage
        }
    }
}
</script>
<style>
.product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
  
  .product-image {
    width: 80%;
  }
  
  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }
    .color-circle{
        width : 50px;
        height : 50px;
        margin-top : 8px;
        border : 2px solid #d8d8d8;
        border-radius: 50%;
        
    }
</style>