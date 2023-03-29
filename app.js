import mongoose from "mongoose";
await mongoose.connect('mongodb://127.0.0.1:27017/ICS', //database connection
{useNewUrlParser: true, useUnifiedTopology: true});

const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
});

//const newStudent = new Student({
    //stdnum: "12345678",
    //fname: "Juan",
    //lname: "dela Cruz",
    //age: 20
//});

//let data = await newStudent.save();
//let data = await Student.find({ age: 17});

//update data
//let updateStudent = await Student.findOne({ stdnum: "12345678"});
//updateStudent.age = 25;
//let data = await updateStudent.save();

//let updateStudent = await Student.updateMany (
//    {age: 17},
//    {$set: {fname: "John"}}
//);

//console.log(updateStudent);

let data = await Student.deleteMany({age : {$gte: 17, $lte: 20}});
console.log(data);

process.exit();