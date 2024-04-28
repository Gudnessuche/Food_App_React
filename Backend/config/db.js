import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://everythingsatoshi1:8hAZWSokaf70Pino@cluster0.4tcwfhu.mongodb.net/food-app').then(()=>console.log('DB connected'))
}