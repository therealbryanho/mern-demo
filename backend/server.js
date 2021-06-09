import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'
import express from 'express'
import userRoutes from './routes/userRoute.js'

//connect database
connectDB()

const app = express()

//Creating API for user
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
