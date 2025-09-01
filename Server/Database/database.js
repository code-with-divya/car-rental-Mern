import mongoose from "mongoose"


const Database = async () => {
    try {
        await mongoose.connect(process.env.mongoDbUrl)
        console.log("Dabase is running!!")
    }
    catch (e) {
        console.log(e)
    }

}
export default Database
