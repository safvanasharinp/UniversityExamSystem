const express=require('express');
const externaldata=require('./src/model/externaldata');
const studentdata=require('./src/model/studentdata');

const cors=require('cors');
var bodyparser=require('body-parser');

//const { urlencoded } = require('body-parser');

//updatedata=require('./src/routes/updatedata.js')

var app=new express();
//app.use(urlencoded({extended:true}));
//app.use('/products',updatedata);


app.use(cors());
app.use(bodyparser.json())

app.get('/students',function(req,res){
    
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')
    externaldata.find()
    .then((students)=>{
       // console.log(students);
        res.send(students);
        
    });
});

app.post('/addstudent',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(student)
    var student={
        dept:req.body.student.dept,
        yoa:req.body.student.yoa,
        adno:req.body.student.adno,
        name:req.body.student.name,
        dob:req.body.student.dob,
        address:req.body.student.address,
        phno:req.body.student.phno,
        email:req.body.student.email
    }
    console.log(student)
    var student=new studentdata(student);
    student.save();
})




app.post('/addexternal',function(req,res){
   // console.log(req.body);
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE');
    
    // var student={
    //    // productId:req.body.product.productId,
    //     rollno:req.body.external.rollno,
    //     paper1:req.body.external.paper1,
    //     paper2:req.body.external.paper2,
    //     paper3:req.body.external.paper3,
    //     paper4:req.body.external.paper4,
    //     paper5:req.body.external.paper5,
    //    // imageUrl:req.body.product.imageUrl
    // }
    req.body.external.forEach((student) => {
        // console.log(student)
    
    

if(student.rollno!=null){
  //  console.log(student.rollno)
   externaldata.findOneAndUpdate({rollno:student.rollno},{"$set":{paper1:student.paper1}})
   .then(function(marks){
       marks.save()
      
   })

   externaldata.findOneAndUpdate({rollno:student.rollno},{"$set":{paper2:student.paper2}})
   .then(function(marks){
       marks.save()
       
   })

externaldata.findOneAndUpdate({rollno:student.rollno},{"$set":{paper3:student.paper3}})
   .then(function(marks){
       marks.save()
       //res.send("successfully updated")
   })
   externaldata.findOneAndUpdate({rollno:student.rollno},{"$set":{paper4:student.paper4}})
   .then(function(marks){
       marks.save()
       //res.send("successfully updated")
   })
   externaldata.findOneAndUpdate({rollno:student.rollno},{"$set":{paper5:student.paper5}})
   .then(function(marks){
       marks.save()
       //res.send("successfully updated")
   })






}

   
});
});



app.listen(3000,function(){
    console.log("app listening port 3000");

})
        
