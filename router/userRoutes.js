const express = require("express");
const router = require("express").Router();

const {
    register, 
    hola
   // login 
} = 
    require("../controllers/auth");

router.get('/hola',hola);
router.post('/register', register);
//router.post('/login', login)

module.exports = router;