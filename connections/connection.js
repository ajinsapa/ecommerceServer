const mongoose=require('mongoose')


//connect mongoose


mongoose.connect(process.env.BASE_URL,{

useUnifiedTopology:true,
useNewUrlParser:true


}).then(()=>{

    console.log("Mongodb atlas connected");


}).catch(()=>
{

    console.log("not connected");
})