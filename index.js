//env import

require('dotenv').config()

//connect connection.js


const express=require('express')
const router = require('./router/router')


//server install

const server=express()

//json to js

server.use(express.json())

require('./connections/connection')

//integrate with fe

const cors=require('cors')

//server use cors

server.use(cors())

//router connection
require('./router/router')

server.use(router)
//server run







const port=6050|| process.env.port

server.listen(port,()=>{

console.log(`server run at ${port}..41n.....`);





})
