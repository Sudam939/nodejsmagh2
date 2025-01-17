import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://sudamshrestha939:82VbkQIhUnIZawos@cluster0.ossg9.mongodb.net/nodejs-magh2")
        console.log("db connected...")
    }catch(e){
        console.log(e)
        process.exit()
    }
}
