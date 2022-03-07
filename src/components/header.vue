<template>
<div>
    
<div class = 'header'>
    <h1 id = "logo" style="display:inline"><span>b</span>Online</h1>
    <p id = "icon" style="display:inline"><img src="https://img.icons8.com/small/50/000000/appointment-reminders--v1.png" /> </p>

    <p id = "userIcon" style="display:inline"><img v-bind:src="picture" /></p>

    <div class="upper"><h1 id = "UserName" style="display:inline">{{firstName}} {{lastName}}</h1></div>
    <div class="lower"><h5 id = "userMail" style="display:inline">{{email}}</h5></div>
    
    
    
</div>
</div>
</template>

<script>
export default{
   data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
   }
}

    
</script>


<style>


    span{
        color: rgb(0, 183, 255);
    }

 #logo{
     top: .2em;
     font-size:36px ;
     left: 0%;
     margin-left: 1em;
 }
 .header{
      
      
      
      max-width: 100vw;
      height: 8em;
      border-bottom: 2px solid black;
      border-width: thin;
      
      
  }
  #icon{
     left:50%;
     top: -.5em;
   
  }

  

 #userIcon {
     left: 65%;
     top: 1em;
    margin-right:.5em ;
    
 }

 #userIcon img{
      
     
     border-radius: 50%;
     width: 4.5em;
  
 }

 .upper{
     left:85%;
     
     top: -4em;
 }

 .lower{
     left:85%;
     top: -4.5em;
     color: blue;
    
 }

 .upper h1{ 
     letter-spacing: 2px;
     font-weight: 600;
 }

  

@media only screen and (max-width: 1500px) {
    #userIcon{
        left: 65% ;
    }
}

@media only screen and (max-width: 1400px) {
    #userIcon{
        left: 65% ;
    }
}

@media only screen and (max-width: 1300px) {
    #userIcon{
        left: 62% ;
    }
}

@media only screen and (max-width: 1200px) {
    #userIcon{
        left: 60% ;
    }
}


@media only screen and (max-width: 1200px) {
    #userIcon{
        left: 56% ;
    }
}

@media only screen and (max-width: 900px) {
    #userIcon{
        left: 40% ;
    }

    #logo{
        left: -1em;
    }

    #icon{
        left: 25%;
    }
    .upper{
        left: 78%;
        letter-spacing: 0;
        font-size: 80%;
        top: -5em;
    }
    .lower{
        left: 78%;
    }
}




</style>