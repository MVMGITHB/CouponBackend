import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './database/db.js';
import userRoute from './route/userRoute.js'
import couponRoute from './route/couponRoute.js'
import categoryRoutes from './route/categoryRoutes.js'; 
import bestOfferRoutes from './route/bestOfferRoutes.js'; 
import dealOnFireRoutes from './route/dealOnFireRoutes.js'; 

dotenv.config();

const app =express()
const port = process.env.PORT||5005;
const DATABASE=process.env.DATABASE_URI;


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173/","http://localhost:5173","http://localhost:5173","https://couponsculture.com/","https://couponsculture.com","https://coupon-admin-pink.vercel.app/","https://coupon-admin-pink.vercel.app"],
  credentials: true
}))
app.use(express.json());
app.use('/uploads', express.static('uploads'));
connectDB(DATABASE)

// app.use("/uploads", express.static("uploads"));

app.use('/api/user',userRoute)
app.use('/api/coupon',couponRoute)
app.use("/api/catagory", categoryRoutes);
app.use("/api/bestOffer", bestOfferRoutes);
app.use("/api/dealOnFire", dealOnFireRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the server</h1>');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})