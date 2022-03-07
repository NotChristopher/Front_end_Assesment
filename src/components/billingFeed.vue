<script setup> 
import PaymentDetails from "./paymentDetails.vue"
import Products from "./products.vue"
import BillingHistory from "./billingHistory.vue"

</script>

<template>
<div>
 <div class="cards" >
     <div v-for="account in accounts" :key = "account.account_id" @click.passive="getDetails(account)" v-bind:class="[{active : isActive} , active ]"  class= "account">
         <h2>{{account.first_name}} {{account.last_name}}</h2>
         <h5 id="status">{{account.account_status}}</h5>
         <h4>Account ID : {{account.account_id}}</h4>
       
     </div>
   
 </div>
   
    <PaymentDetails   />
    <Products />
    <BillingHistory />
</div>
</template>

<script>
import accountData from "./../data/Data.json"


    export  default {
        
        data(){

             
            return{
                accounts : accountData,
                isActive : false
            
            }
       
        },
         methods:{
            getDetails(account){
                const payload = account
                this.isActive =! this.isActive
                this.$store.commit('setCurrentAccount', payload)
               
                
            }
    
        },
        
        
    }
    
</script>

<style>


.account{
    display: inline-table;
    margin-right: 3em;
    width : 20em;
    max-width: 25em;
    height: 5em;
    max-height: 1em;
    
    border: .2px;
    border-style: solid;
    border-radius: .5em;
    padding-left:1em ;
    padding-right: 2em;
}



.active{
    background: rgba(75, 185, 236, 0.295);
}

.account h2{
    color: rgb(26, 104, 188);
    font-weight: 600;
}

.account h5{
    
    display: inline;
    position: relative;
    
}

.account h4{
    font-weight: 500;
}

.account h4{
    top: -1em;
}
#status{
    top: -2.5em;
    left: 15.5em;
    font-size: 14px;
    background: white;
    color: rgba(26, 188, 156, 1);
    padding: .4em 1em;
    font-weight: 500;
    border-radius: 1em;
    font-size: 12px;
}

.cards{
    left: 0em;
    top: 3.5em;
}



 @media only screen and (max-width: 1400px) {
  .account{
      margin-right: 1em;
      margin-bottom: .5em;
     
  }

  .cards{
       max-width:81% ;
  }
}


 @media only screen and (max-width: 900px) {
  .account{
      
    width : 22em;
    max-width: 22em;
    height: 5em;
    max-height: 1em;
    font-size: 50%;
    margin-right:2em ;
  }

  

  #status{
      left:  11em;
      top: -2em;
      font-size: 100%;
  }
}
</style>