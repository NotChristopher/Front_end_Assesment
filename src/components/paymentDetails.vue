<template>
 <div class ="payments-container" >
     <h2>Payment details</h2>
     <h4>View details of your next invoice and payment method</h4>
     <h3>Next invoice : {{account.next_invoice_date}}</h3>
    
     <div s class = "payment-detail">
         <h3>Current balance</h3>
         <h1>£{{account.balance}}</h1>
         <img id = "lock" v-bind:src="lockIcon" />
         <h4>This is a secure 256-bit ssl <br />
              encrypted payment. You're safe.</h4>
         <button>Pay Now</button>
     </div>
      <div  class = "payment-method">
         <h3>Payment method</h3>
         <h6>{{account.payment_method}}</h6>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="24" height="24"
viewBox="0 0 225 225"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,225.99826v-225.99826h225.99826v225.99826z" fill="none"></path><g fill="#1abc9c"><path d="M112.43563,4.83484c-1.18797,0.03482 -2.13294,1.00792 -2.13289,2.19641v20.56675c0,1.21352 0.98375,2.19727 2.19727,2.19727c1.21352,0 2.19727,-0.98375 2.19727,-2.19727v-20.56675c0.00002,-0.59393 -0.24039,-1.16257 -0.66646,-1.57635c-0.42607,-0.41378 -1.0015,-0.63746 -1.59518,-0.62006zM40.16533,30.52397c-0.88262,0.01327 -1.67163,0.5534 -2.00333,1.37143c-0.3317,0.81803 -0.14171,1.75514 0.48241,2.37938l16.0469,16.04691c0.55375,0.56209 1.36636,0.78414 2.129,0.58175c0.76264,-0.20239 1.35823,-0.79814 1.56041,-1.56084c0.20218,-0.7627 -0.02009,-1.57525 -0.58233,-2.12884l-16.04691,-16.04691c-0.42011,-0.41985 -0.99228,-0.65175 -1.58615,-0.64287zM184.70592,30.52568c-0.54887,0.02401 -1.06883,0.25276 -1.4574,0.64116l-16.04691,16.04691c-0.84712,0.85988 -0.84205,2.24208 0.01136,3.09572c0.8534,0.85364 2.2356,0.85909 3.09572,0.01221l16.0469,-16.04691c0.6408,-0.64082 0.82247,-1.6093 0.45748,-2.43879c-0.36499,-0.82949 -1.20177,-1.34983 -2.10715,-1.3103zM111.29494,50.01698c-21.13583,0.48172 -39.85785,13.7598 -47.30157,33.54734c-7.44371,19.78754 -2.11512,42.11302 13.46282,56.4058c8.27176,7.6676 12.96116,18.44427 12.93383,29.72316v2.56291h14.69936l-11.5056,-49.11661c-1.26694,-1.8457 -2.04342,-2.6659 -3.37057,-2.6659c-1.21352,0 -2.19727,-0.98375 -2.19727,-2.19727c0,-1.21352 0.98375,-2.19727 2.19727,-2.19727c3.9252,0 5.89506,2.93116 7.33251,5.07174c1.46074,2.17441 2.25036,3.12681 3.68386,3.12681c1.4335,0 2.22183,-0.9524 3.68213,-3.12681c1.43745,-2.14014 3.40563,-5.07174 7.32994,-5.07174c3.92432,0 5.89634,2.93074 7.33423,5.07088c1.46162,2.17441 2.25205,3.12767 3.68643,3.12767c1.43438,0 2.22525,-0.95326 3.68643,-3.12767c1.43833,-2.14014 3.40774,-5.07088 7.33337,-5.07088c1.21352,0 2.19727,0.98375 2.19727,2.19727c0,1.21352 -0.98375,2.19727 -2.19727,2.19727c-1.30605,0 -2.08,0.79376 -3.31135,2.5775l-11.08246,49.20502h14.72168v-2.56291c0.06587,-11.38911 4.84721,-22.24198 13.20677,-29.97722c10.35107,-9.6286 16.3122,-23.07286 16.49815,-37.20862c0.18595,-14.13577 -5.41946,-27.73218 -15.51367,-37.62973v-0.00171c-9.98035,-9.81804 -23.50989,-15.17808 -37.5063,-14.85901zM106.08244,57.05252c1.14012,0.04063 2.05948,0.94704 2.11629,2.08647c0.0568,1.13942 -0.76785,2.13278 -1.89828,2.28661h-0.00172c-16.20527,2.50777 -29.34893,14.44658 -33.39844,30.33686c-0.29556,1.17725 -1.48951,1.89201 -2.66676,1.59645c-1.17725,-0.29556 -1.89201,-1.48951 -1.59645,-2.66676c4.48193,-17.60986 19.04892,-30.83999 37.00762,-33.6113c0.1446,-0.02402 0.29124,-0.03351 0.43773,-0.02832zM69.42501,97.67704c0.61864,-0.02466 1.21898,0.21283 1.65333,0.65405c0.43435,0.44121 0.6624,1.0452 0.62805,1.66338c-0.02637,0.59678 -0.03948,1.20303 -0.03948,1.80244c0,1.21352 -0.98375,2.19727 -2.19727,2.19727c-1.21352,0 -2.19727,-0.98375 -2.19727,-2.19727c0,-0.66226 0.01433,-1.33251 0.04377,-1.99213c0.03558,-1.1528 0.95642,-2.08189 2.10886,-2.12774zM14.5071,102.82517c-1.21352,0 -2.19727,0.98375 -2.19727,2.19727c0,1.21352 0.98375,2.19727 2.19727,2.19727h20.56589c1.21352,0 2.19727,-0.98375 2.19727,-2.19727c0,-1.21352 -0.98375,-2.19727 -2.19727,-2.19727zM189.92529,102.82517c-1.21352,0 -2.19727,0.98375 -2.19727,2.19727c0,1.21352 0.98375,2.19727 2.19727,2.19727h20.56675c1.21352,0 2.19727,-0.98375 2.19727,-2.19727c0,-1.21352 -0.98375,-2.19727 -2.19727,-2.19727zM112.24165,120.47367c-1.43438,0 -2.22184,0.9524 -3.68214,3.12681c-1.43745,2.14014 -3.40562,5.07173 -7.32994,5.07173c-0.64077,0.00167 -1.27873,-0.08469 -1.896,-0.25663l10.26878,43.8406h5.78156l9.87997,-43.86635c-0.64997,0.19069 -1.32422,0.28581 -2.00157,0.28238c-3.92563,0 -5.89548,-2.93074 -7.33337,-5.07088c-1.46162,-2.17485 -2.25291,-3.12767 -3.68728,-3.12767zM86.4564,176.65072c-1.75533,0 -3.16887,1.41354 -3.16887,3.16887v0.7081c0,1.75533 1.41354,3.16801 3.16887,3.16801h52.08721c1.75533,0 3.16887,-1.41269 3.16887,-3.16801v-0.7081c0,-1.75533 -1.41354,-3.16887 -3.16887,-3.16887zM88.79872,188.09109c-1.75533,0 -3.16887,1.41268 -3.16887,3.16801v0.7081c0,1.75533 1.41354,3.16887 3.16887,3.16887h47.40343c1.75533,0 3.16801,-1.41354 3.16801,-3.16887v-0.7081c0,-1.75533 -1.41268,-3.16801 -3.16801,-3.16801zM91.14017,199.52975c-1.75533,0 -3.16801,1.41354 -3.16801,3.16887v0.7081c0,1.75533 1.41268,3.16801 3.16801,3.16801h42.71879c1.75533,0 3.16887,-1.41269 3.16887,-3.16801v-0.7081c0,-1.75533 -1.41354,-3.16887 -3.16887,-3.16887zM95.66002,210.97012c1.66973,5.47113 6.72263,9.20547 12.44287,9.1959h8.79421c5.72024,0.00957 10.77314,-3.72477 12.44287,-9.1959z"></path></g></g></svg>
         <p><span>Guide:</span> To manage your payment<br/>
              more easily, we recommend switching <br /> to Direct Debit</p>
         <button v-if="account.payment_method == 'DD'">Already on Direct Debit</button>
         <button v-else>Switch to Direct Debit</button>
     </div>

 </div>

</template>

<script>

import {mapGetters} from "vuex"
export  default {
      
           computed :{
            ...mapGetters({account : "getCurrentAccount"}),

          

            
        },

        data(){
            return{

                lockIcon :"https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png"
            }
            
        }
}
    
</script>

<style >
    .payments-container{
        top: 5em;
        left: 2em;
        
    }

    .payments-container h2{
        font-weight: 600;
        margin-bottom: .2em;
    }

     .payments-container h3{
        left: 1em;
        margin-top: 1.5em;
        margin-bottom: 1em;
    }

    .payments-container svg{
        top: -.5em;
        
    }
    .payment-method h6{
        top: -4em;
        left: 16em;
    }
    .payment-method p{
        top: -2.5em;
        left: 2em;
    }

      .payment-method span{
        color: rgba(26, 188, 156, 1);
       font-weight: 600;
    }
    .payment-detail{
      
    display: inline-table;
    margin-right: 2em;
    width : 20em;
    left: 2em;
    max-width: 25em;
    padding: 1em .5em;

    }

    #lock{
        top: -1.5em;
    }

    .payment-detail h4{
        left: 15%;
        top: -4em;
    }

    .payment-detail h3{
        left: 0;
    }

       .payment-detail h1{
        top:-.8em;
    }

     .payment-method{
    left: 8em;
    top: .5em;
    display: inline-table;
    margin-right: 1em;
    max-height:10em;
    width : 20em;
    max-width: 25em;
    padding: .5em;
   
    }

    .payment-method h3{
        right: 4em;
    }

    .payment-method h4{
        top: 4em;
    }

    button{
        padding: .8em;
        border-radius: .5em;
        background-color: rgb(15, 148, 220);
        color:white;
        font-weight: 500;
        border: 0;
    }

     .payment-method button{
      top: -2em;
    }

     .payment-detail button{
      top: -3.5em;
    }

    @media only screen and (max-width: 1300px) {
         .payment-method{
    left: 0em;
   
   
    }
    }

    @media only screen and (max-width: 1200px) {
    .payment-detail{
       left: 1em;
       margin-right: 1em;
       max-width: 25%;
    }

    .payment-method{
        max-width: 25%;
    }
}

  @media only screen and (max-width: 1000px) {
    .payment-detail{
       left: 1em;
       margin-right: 1.5em;
       max-width: 25%;
        font-size: 80%;
    }

    .payment-detail button{
      top: -2.5em;
    }
     .payment-method button{
      top: -1em;
    }
     .payment-method h3{
      left: -.5em;
    }

    .payment-method{
        max-width: 25%;
        font-size: 80%;
    }
}

  @media only screen and (max-width: 900px) {
    .payments-container{
        
        left: 0em;
        
    }

     .payment-method{
        max-width: 25%;
        font-size: 80%;
    }
     #lock{
        top: -1.2em;
    }
    .payment-detail {
      left: 0;
      font-size: 80%;
    }
}
</style>