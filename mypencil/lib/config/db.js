import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://maxcuello123_db_user:PHE9lkG1vLsy7IUN@cluster0.f26u6b4.mongodb.net/');
    console.log("DB CONNECTED")

}