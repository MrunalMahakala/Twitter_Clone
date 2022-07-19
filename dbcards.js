
import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema=new Schema(
    {
        name:{
            type: String,
            required: true
        },
        img_url:String,
        username:String,
        verified:Boolean,
        avatar:String,
        content:{
            type: String,
            required: true
        },
        timestamp:Date
    }
)
export default mongoose.model('cards',cardSchema);