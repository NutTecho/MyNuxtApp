<template lang="html">
  <div class="container">
      <!-- <slot></slot> -->
        <b-card no-body class="overflow-hidden" style="max-width: 800px;" >
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="imagesource" img-alt="Card image" class="rounded-0" />
            </b-col>
            <b-col md="6" >
                <b-card-body>
                    <b-card-title>
                        <span> <slot name="cardtitle">Title</slot>
                            (<slot name="cardyear">1990</slot>)   </span>
                            <br>
                        <span> Score :  <slot name="cardscore">100</slot>  </span>
                        <span> Time :  <slot name="cardtime">120</slot>    </span>

                        
                    </b-card-title>
                     <!-- <slot name="cardtitle">Title</slot>
                    </b-card-body> -->
                    <b-card-text>
                        <!-- This is a wider card with supporting text as a natural lead-in to additional content.
                        This content is a little bit longer. -->
                        <slot name="cardbody">Body</slot>
                    </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
  </div>
</template>

<script>
export default {
    props :
    {
        imagesource:{
            type:String,
            default: "https://picsum.photos/400/400/?image=20",
        },
    }

}
</script>

<style lang="css" scoped>

</style>