const mongoose=require('mongoose')

const drinkSchema=new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    rating:Number
})


const drinkModel=mongoose.models.drink||mongoose.model("drink", drinkSchema)
module.exports=drinkModel