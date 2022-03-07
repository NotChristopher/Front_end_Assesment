<template>
    <div class ="sidebar">
        <ul>
        <li id="home"><img v-bind:src="homeIcon" />Home</li>
        <li id="billing" v-bind:class="[active]"><img v-bind:src="billingIcon" />Billing</li>
        </ul>
    </div>
</template>

<script>


export default ({
    data() {
      return{
          billingIcon:"https://img.icons8.com/material-outlined/48/000000/bank-card-back-side.png",
          homeIcon:"https://img.icons8.com/material-outlined/48/000000/home--v2.png"
      }  
    },
})
</script>


<style>
.sidebar{
    max-width: 20%;
    top: 2em;
    font-size:28px ;
    margin-left: 1em;
}



#home{
  right: 15%;
    
}

#billing{
    right: 15%;
    top: 2em;
}

#billing img{
    width: 36px;
}

#home img{
    width:36px ;
}
ul{list-style: none;}


@media only screen and (max-width: 1200px) {
   .sidebar{
    width: 5em;
    top: .5em;
    font-size:24px ;
   
}


.active{
    background: rgba(75, 185, 236, 0.295);
}
#home{
  left: 0;
    
}

#billing{
    left: 0;
    top: 1em;
}

ul{
    max-width: 10%;
}

li img{
    width:24px ;
    left: -2em;
    top: 2em;
}
}

@media only screen and (max-width: 1000px) {
   .sidebar{
    width: 5em;
    top: .5em;
    font-size:20px;
   
}
#home{
  left: 1em ;
    
}

#billing{
    left: 1em;
    top: 1em;
}

ul{
    max-width: 10%;
}

li img{
    width:16px ;
    left: -2em;
    top: 2em;
}
}
</style>