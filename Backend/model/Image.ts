import mongoose from "mongoose";
const { Schema, model } = mongoose;

const imageSchema = new Schema(
  {
    url: {
        type:String,
        required:true
    },
    mall: { type: Schema.Types.ObjectId, ref: "Mall" },
    shop: { type: Schema.Types.ObjectId, ref: "Shop" }
  },
  { timestamps: true }
);

const Image = model("Image", imageSchema);

export default Image;
