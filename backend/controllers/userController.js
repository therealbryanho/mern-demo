import Users from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getUsers = asyncHandler(async(req, res) => {
    const users = await Users.find({})
    res.json(users)
    console.log('getting users - '+users);
})

//getUserById function to retrieve user by id
export const getUserById  = asyncHandler(async(req, res) => {
    const user = await Users.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})