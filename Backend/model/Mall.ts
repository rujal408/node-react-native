import mongoose from "mongoose";
const {Schema, model} = mongoose

// Schema
const mallSchema = new Schema({
    name:String,
    shops:[{type:Schema.Types.ObjectId, ref:'Shop'}],
},{timestamps:true})

const Mall = model('Mall',mallSchema)

export default Mall