const user=requir("../models/User.js")

const adduser=async(req,res)=>{
    try {
        const newUser= new user(req.body)
        const User= await newUser.save()
        res.json({message:"user added successfully",User})
        
    } catch (error) {
       return res.json(error.message) 
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const allUsers= await user.find()
        return res.json(allUsers)
        
    } catch (error) {
        return res.json(error.message) 
   
    }
}

const getUserById=async(req,res)=>{
    try {
        const User= await user.findById(req.params.id)
        return res.json(User)
    } catch (error) {
        return res.json(error.message) 

    }
}



const getUserByage=async(req,res)=>{
    try {
        const User= await user.findOne({age:req.body.age})
        return res.json(User)
    } catch (error) {
        return res.json(error.message) 

    }
}

const updateUser=async(req,res)=>{
    try {
        const User= await user.findOneAndUpdate({id:req.params.id},{$set:{name:req.body.name}})
        return res.json(User)
    } catch (error) {
        return res.json(error.message) 

    }
}

const deleteUser=async(req,res)=>{
    console.log(req.params.id)
    await user.findByIdAndDelete(req.params.id)
    return res.json({message:"user deleted"})
}

module.exports={adduser,getAllUsers,getUserById,getUserByage,updateUser,deleteUser}