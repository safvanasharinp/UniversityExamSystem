
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/ExamDb');
const Schema=mongoose.Schema;

var NewStudentSchema=new Schema({
    //productId:Number,
    dept:String,
    yoa:Number,
    adno:String,
    name:String,
    dob:Date,
    address:String,
    phno:Number,
    email:String,
    // productCode:String,
    // releaseDate:String,
    // description:String,
    // price:Number, 
    // starRating:Number,
    // imageUrl:String

});
var studentdata=mongoose.model('studentdata',NewStudentSchema,'studentdata');
module.exports=studentdata;