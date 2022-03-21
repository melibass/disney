const express = require("express");
const router = require("express").Router();

const {
    register, 
    login 
} = 
    require("../controllers/auth");

//registro de nuevo usuario
router.post('/register', register);

//login de user
router.post('/login', login)

module.exports = router;