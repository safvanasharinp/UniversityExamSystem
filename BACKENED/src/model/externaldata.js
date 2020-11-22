
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/ExamDb');
const Schema=mongoose.Schema;

var NewStudentSchema=new Schema({
    //productId:Number,
    rollno:String,
     paper1:String,
     paper2:String,
     paper3:String,
     paper4:String,
     paper5:String,
    // productCode:String,
    // releaseDate:String,
    // description:String,
    // price:Number, 
    // starRating:Number,
    // imageUrl:String

});
var externaldata=mongoose.model('externaldata',NewStudentSchema,'externaldata');
module.exports=externaldata;