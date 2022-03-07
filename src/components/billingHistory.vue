<template>
    <div>
        <h3>Billing history</h3>
        <h7>Choose a billing plan to see more details</h7>
        <table id = "billing-history">
            <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
                <th>Reference</th>
                <th>Download</th>
            </tr>
            <tr v-for="table in tables" :key ="table.reference">
                <td>{{table.date}}</td>
                <td>{{table.type}}</td>
                <td>{{table.amount}}</td>
                <td>{{table.balance}}</td>
                <td>{{table.reference}}</td>
                <td><img v-bind:src="dowloadIcon" /></td>
            </tr>
             
        </table>
    <span class ="pagnitation" v-for="(item,index) in new Array(5)" :key="index" >
        
            <button>{{index + 1}}</button>

        </span>   
    </div>
</template>
<script> 
import tableData from "../data/tableData.json"
export default{
    
    data(){
        return{
        tables:tableData,
        dowloadIcon :"https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-download-user-interface-kmg-design-flat-kmg-design.png"
        }
   
}
}
</script>
<style> 


.pagnitation{
    left: 25%;
}

.pagnitation button{
    border:none;
    background: none;
    color: black;
}



#billing-history td, #billing-history th {
  border: 1px solid #ddd;
  padding: 1em 5em;
  text-align: left;
}


 .billing-history img{
     top: -.2em;
 
 }

 

</style>