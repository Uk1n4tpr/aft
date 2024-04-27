const {Schema, model} = require("mongoose");

const QuestionSchema = new Schema({
    firstName: {type: String, default:""},
    lastName: {type: String, default:""},
    email: {type: String, default:""},
    mobile: {type: String, default:""},
    adress: {type: String, default:""},
    question: {type: String, default:""}
})

const UserQuestion = model("question", QuestionSchema);
module.exports = UserQuestion;