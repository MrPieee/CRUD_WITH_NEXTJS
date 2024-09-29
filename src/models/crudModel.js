import mongoose from "mongoose";


const CRUD_Schema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
},{timestamps:true});


const CRUD =mongoose.models.nextCrud || mongoose.model('nextCrud',CRUD_Schema);

export default CRUD;