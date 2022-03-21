const db = require("../models");



module.exports={

    hola: (req,res) =>{
        res.send('anda')
    },
    register: async (req,res)=>{

       // const { name, email, password } = req.body;
        const newUser = await db.Users.create({
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        })
        return res.status(200).json({
        meta: {
            status: 200,
            ok: true,
            msg: "User created succesfully",
        },
        data: newUser
    });
    

    

}
}