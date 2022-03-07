<script setup>



import BillingFeed from "../components/billingFeed.vue"

</script>

<template>
<div class="billing">
    <h1>Billing</h1>
    <h3>Overview of your accounts </h3>
   
   <BillingFeed />
</div>
</template>


<style>
    .billing{
        left: 15em;
        top: -3em;
        max-width: 100vw;
        overflow-x:hidden ;
    }

     .billing h1{
        font-size: 36px;
        font-weight: 600;
    }
@media only screen and (max-width: 1200px) {
  .billing{
      left: 10em;
      top:-7em;
  }
}
@media only screen and (max-width: 1000px) {
  .billing{
      left: 7em;
      top:-9em;
  }
}

@media only screen and (max-width: 900px) {
  .billing{
      left: 5em;
      top:-9em;
  }
}

   
</style>

<script>


</script>
