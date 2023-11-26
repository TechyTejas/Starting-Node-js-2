const express = require("express")
const path = require("path")

const router = express.Router()
const contactcontroller = require("../controllers/ContactUs")
 

router.get('/contact-us',contactcontroller.ContactUsController)

router.post('/success',contactcontroller.SuccessController)

module.exports = router;