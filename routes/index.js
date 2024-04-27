const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("01-homepage");
})

router.get("/02-folije", (req, res) => {
    res.render("02-folije");
})

router.get("/03-projekti", (req, res) => {
    res.render("03-projekti");
})

router.get("/04-onama", (req, res) => {
    res.render("04-onama");
})

router.get("/05-contact", (req, res) => {
    res.render("05-contact");
})

router.use("/auth", require("./auth"));

module.exports = router;