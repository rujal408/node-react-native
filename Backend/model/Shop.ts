import mongoose from "mongoose";
const {Schema, model} = mongoose

const shopSchema = new Schema({
    name:String,
    images: [{ type: Schema.Types.ObjectId, ref: "Image" }]
},{timestamps:true})

const Shop = model('Shop',shopSchema)

export default Shop