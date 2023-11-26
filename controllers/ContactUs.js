const express = require("express")
const path = require("path")


exports.ContactUsController = (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views' , 'contactus.html')); 
}

exports.SuccessController = (req, res, next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views' , 'success.html'));
    console.log(req.body)
    res.redirect('/success')
}