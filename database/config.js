import mongoose from "mongoose";

const dbConnection = async() => {
    try {

    //MongoParseError: option usefindandmodify is not supported
    //    await mongoose.connect(process.env.MONGODB_CNN, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false 
    //    });

       await mongoose.connect(process.env.MONGODB_CNN);

       console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

export {dbConnection};