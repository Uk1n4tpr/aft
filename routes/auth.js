const {Router} = require("express");
const router = Router();

router.post("/contact", require("../controlers/auth/contact.js"))

module.exports = router;