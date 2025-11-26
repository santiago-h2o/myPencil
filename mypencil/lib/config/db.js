import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://maxcuello123_db_user:PHE9lkG1vLsy7IUN@cluster0.f26u6b4.mongodb.net/my-pencil');
    console.log("DB CONNECTED")

}

