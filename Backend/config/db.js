import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://everythingsatoshi1:f6MkfUBB6qeSa265@cluster0.hak7jnw.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}
