const db = require("../models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
// require("dotenv").config();
// const sgMail= require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendMail = async(req,res)=>{
//     try{
//         await sgMail.send(msg);
//         console.log("msg sent");
//     } catch(error){
//     if (error.response)
//         console.log(error.response.body);
// }
// };
// sendMail({
//     to: "melinabassano0@gmail.com",
//     from: "mbassano@gmail.com",
//     subject: "You have been subscribed",
//     text: "Now you can access to the wonderful world of Disney"
// })

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
            
        } );
        console.log(req.body)
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
                msg: "an error ocurred"
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

            // Verify Password
            const validPass = bcrypt.compareSync(password, userToLogin.password);
            if (!validPass) {
                return res.status(400).json({
                    ok: false,
                    msg: "Password incorrect",
                });
            }

    }

    catch (error) {
        console.log(error)
        res.status(404).json({
            meta: {
                status: 404,
                ok: false,
                msg: "an error ocurred"
            },
            data: error,
        })
    }
}
}