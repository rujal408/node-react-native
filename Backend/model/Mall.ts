import mongoose from "mongoose";
const {Schema, model} = mongoose

// Schema
const mallSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image: { type: Schema.Types.ObjectId, ref: "Image" },
    shops:[{type:Schema.Types.ObjectId, ref:'Shop'}],
},{timestamps:true})

const Mall = model('Mall',mallSchema)

export default Mall