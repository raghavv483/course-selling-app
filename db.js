const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
console.log("connected to Mongoose");
mongoose.connect("mongodb://localhost:27017/course-selling-app");


const userSchema = new Schema({
    email: { type: String, unique: true },
    firstname: String,
    lastname: String,
    password: String,
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    createrId: ObjectId,

})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    firstname: String,
    lastname: String,
    password: String,
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = { userModel, adminModel, courseModel, purchaseModel }


