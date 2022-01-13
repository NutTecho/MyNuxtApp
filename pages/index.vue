<template>
<div>
  <div class="container-fluid">
    <!-- <Tutorial />
    <Nuxt /> -->
    <Demo1 />
  </div>
  <div class="container-fluid">
    <h2>Hello Web App</h2>
    <p> {{ title }}</p>
    <p :[setAtt]="newId"></p>
    <nuxt-link to="about" class="btn btn-primary">About</nuxt-link>
    <nuxt-link to="buysock" class="btn btn-primary">Buy Sock</nuxt-link>
  </div>
</div>
</template>

<script>
// import Tutorial from '@/components/Tutorial'
export default {
  name: 'IndexPage',
  // components:{Tutorial},
  layout : "corelayout",
  data(){
    return{
      title : 'test',
      setAtt : 'id',
      newId : 1,
    }
  },
  //  ======= life cycle of vue event
  // beforeCreate(){
  //   console.log();
  // },
  // created()
  // {
  //   console.log();
  // },
  // beforeMount(){
  //   console.log();
  // },
  // mounted(){
  //   console.log();
  // },
  // beforeDestroy()
  // {
  //   console.log();
  // }
  
}
</script>
