const db = require("../models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { transporter } = require("../services/mailer")
const { newJWT } = require("../helpers/newJWT")


module.exports={

    register: async (req,res)=>{
        try {
       const { name, email, password } = req.body;
      const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.status(404).json({
                    meta: {
                        status: 404,
                        ok: false,
                    },
                    errors: errors.mapped(),
                });
            } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)
        const newUser = await db.Users.create({
            name,
            email,
            password: hash
            
        } )
        await transporter.sendMail({
            from: "<mbassano@gmail.com>",
            to: email,
            subject: "Successful registration",
            html: `
            <div>
              <h1>Thank you for subscribing! Hope you enjoy the wonderful world of Disney!</h1>
            </div>
            `,
        });
             res.status(200).json({
                meta: {
                  status: 200,
                    ok: true,
                     msg: "User created succesfully",
                 },
                data: newUser
             });
              
            }
    
        }catch (error){
        console.log(error)
        res.status(404).json({
            meta: {
                status: 404,
                ok: false,
                msg: "An error has ocurred"
            },
            data: error,
        })
    }    

    },

    login: async (req,res) =>{
        try {
            const { email, password } = req.body;

            const userToLogin = await db.Users.findOne({
                where: { email },
            });

            if (!userToLogin) {
                return res.status(404).json({
                    ok: false,
                    msg: `The email ${email} doesn't belong to any registered user`,
                });
            }

            // Check correct Password
            const validPass = bcrypt.compareSync(password, userToLogin.password);
            if (!validPass) {
                return res.status(400).json({
                    ok: false,
                    msg: " The password entered is incorrect",
                });
            }
              //Create JWT
              const token = await newJWT(userToLogin.email);

              res.status(200).json({
                  ok: true,
                  msg: "User logged in",
                  token,
              });
    }

    catch (error) {
        console.log(error)
        res.status(404).json({
            meta: {
                status: 404,
                ok: false,
                msg: "An error has ocurred"
            },
            data: error,
        })
    }
}
}