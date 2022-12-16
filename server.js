const express=require('express')
const mongoose=require('mongoose')
const { adduser, getAllUsers, getUserById, getUserByage, updateUser, deleteUser } = require('./Controllers/userControllers')
require('dotenv').config()
const app=express()
const Router=express.Router()

const port=process.env.PORT

Router.post('/adduser',adduser)
Router.get('/getAllUsers',getAllUsers)
Router.get('/getUserById/:id',getUserById)
Router.get('/getbyage',getUserByage)
Router.put('/updateUser/:id',updateUser)
Router.delete('/deleteUser/:id',deleteUser)

app.connect(process.env.Mongo)
app.listen(port)