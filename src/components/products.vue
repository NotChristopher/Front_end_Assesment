<template>
 <div class="products">
     <h2>My products</h2>
     <h5>All your product at a glance</h5>
     <ul>
        <li id="product" v-for="product in account.products" :key = "product.product_id"><img v-bind:src="product.product_icon" />{{product.product_kind}} - {{product.product_detail}} </li>
       
        
     </ul>
     
   
 </div>

</template>

<script>

import {mapGetters} from "vuex"
    export  default {
       
        computed :{
            ...mapGetters({account : "getCurrentAccount"})
            
        }
    }
</script>

<style>
 .products{
     top: -11em;
     left: 60%;
     width: 150%;
     text-align: left;
 }

  .products h2{
     font-size: 36px;
 }

  .products h5{
     letter-spacing: 3px;
 }
 #product{
     max-width: 20em;
     text-align: left;
 }
#product img{
    width: 2em;
    height: auto;
    top: .5em;
    left: -3em;
    
}
#product li{
    width: 2em;
    height: auto;
    top: .5em;
    left: -3em;
    
}




 @media only screen and (max-width: 1400px) {
   .products{
        left: 65% ;
        
    }
 }

    @media only screen and (max-width: 1300px) {
   .products{
        left: 60% ;
    }
}

 @media only screen and (max-width: 1200px) {
   .products{
        left: 63% ;
      
    }
}

@media only screen and (max-width: 1100px) {
   .products{
        left: 63% ;
      
    }
     .products ul{
     margin-top:0em ;
     right: 1em;
 }
  .products li{
     margin-top: .5em;
 }
}

@media only screen and (max-width: 900px) {
   .products{
       top: -12em;
        left: 59% ;
        font-size: 85%;
        width: 100%;
    }
     .products ul{
     margin-top:0em ;
     right: 1em;
   
    
 }
  .products li{
     margin-top: 1em;
     font-size: 80%;
     
 }

 
.products img{
    width: 2em;
    height: auto;
    top: 4em;
    margin-right: 2em;
    left: 1em;
    display: none;
}
}
</style>