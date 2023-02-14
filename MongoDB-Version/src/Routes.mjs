import express from 'express'

import { createUserController } from './Controller.mjs'

const router = express.Router()

router.post('/login',createUserController)

router.post('/create',(req,res)=>{
    res.send("Hola again jasdj")
})

export default router;