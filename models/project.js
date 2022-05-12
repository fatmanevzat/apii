const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProjectSchema = new Schema({
    id:Schema.Types.ObjectId,
    title: {type: String},
    name: {type: String},
    phone: {type: Number, default: 0},
    email: String,
    website: String,
    address: String,
    createdAt:{type:Date,default:Date.now}
})

module.exports = mongoose.model("project",ProjectSchema)