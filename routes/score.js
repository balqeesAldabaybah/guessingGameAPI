//here is where we create the actual API 
const express = require('express')
const Score = require('../modules/score')

const router = express.Router()

//CRUD
//Create 
router.post('/score',async(req,res)=>{
    // store to database
   // console.log(req.body)
   const score = await Score.create(req.body)
   return res.send(score)
})
//Read 
router.get('/score', async(req,res)=>{
    const scores =  await Score.find()
    return res.send(scores)
})
module.exports = router