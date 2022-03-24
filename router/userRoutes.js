const express = require("express");
const router = require("express").Router();

const {
    register, 
    login 
} = 
    require("../controllers/auth");




router.post('/register', register);

//login de user
router.post('/login', login)

module.exports = router;


