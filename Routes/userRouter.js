const router = require('express').Router()
const {user}=require('../Controller/userController')

router.get('/',user)

module.exports=router