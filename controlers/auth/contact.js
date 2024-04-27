const UserQuestion = require("../../models/QuestionModel");
const nodemailer = require("nodemailer");
require("dotenv").config();

const userQuestion = async (req, res) => {
    // requesting body
    const {firstName, lastName, email, mobile, adress, question} = req.body;

    //trying to get the form info
    try {
        let newQuestion = new UserQuestion({firstName, lastName, email, mobile, adress, question});
        let savedQuestion = await newQuestion.save();
        const mailSender = async (firstName, lastName, email, mobile, adress, question) => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });
        
            const info = await transporter.sendMail({
                from: process.env.EMAIL,
                to: process.env.RECEIVINGEMAIL,
                subject: "User Question",
                html: `
                    <h1>User Question<h1>
                    <p>from:${firstName} ${lastName}</p>
                    <p>email: ${email}</p>
                    <p>mobile: ${mobile}</p>
                    <p>adress: ${adress}</p>
                    <p>question: ${question}</p>
                `
            })
        }        
        mailSender(savedQuestion.firstName, savedQuestion.lastName, savedQuestion.email, savedQuestion.mobile, savedQuestion.adress, savedQuestion.question);
        res.redirect("back");
    }catch (err) {
        console.log(err);
    }
}

module.exports = userQuestion;