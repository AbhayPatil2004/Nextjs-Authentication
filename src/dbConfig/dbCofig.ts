import mongoose, { connection } from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log("Mongo db Connected succesfully")
        })

        connection.on("error" , (err) => {
            console.log( "Mongo db connection error" ,err)
        })
    }
    catch(error){
        console.log("Someting went Error")

    }
}