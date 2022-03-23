const express = require("express");
const router = require("express").Router();

const {
    register, 
    login 
} = 
    require("../controllers/auth");


/**
 * Route register new user
 * @openapi
 *  /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Register new user"
 *          description: "This route is for registering new users"
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/registerUser"
 *          responses:
 *                  '200':
 *                      description: El usuario se registra de manera correcta
 *                  '404':
 *                      description: Error por validacion
 * 
 * 
 */
    //registro de nuevo usuario

router.post('/register', register);

//login de user
router.post('/login', login)

module.exports = router;


