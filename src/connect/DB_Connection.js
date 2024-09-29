import mongoose from "mongoose"

const DB_URL= process.env.DB_URL;

export const DBCONNECT = async () => {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(`Error connection `,error.message);
    };
};


