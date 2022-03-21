// const jwt = require("jsonwebtoken");
// const config = process.env;

// //user accede a ruta login para ingresar a su cuenta

// const createToken= (email) =>{
//     return new Promise((resolve,reject)=> {
//     const user ={ email };
//         //creamos un token y lo enviamos al lado del cliente asi lo almacena
//     jwt.sign(user, process.env.SECRETKEY, {expiresIn: '2m'}, (error,token)=>{
//         if(error){ 
//             console.log(err);
//             reject("We couldn't create your token");
//         }else{
//             resolve(token)
//         }
       
//     });

// })
// };

// //Authorization: Bearer <token> 
// app.post('/api/posts', verifyToken, (req,res)=>{
        
//    jwt.verify(req.token, config.SECRETKEY, (error, authData)=>{
//        if(error){
//            res.sendStatus(403);//aceso prohibido
//        }else{
//            res.json({
//                mensaje: "Post fue creado",
//                authData: authData
//            })
//        }
//    } );
// });

// function verifyToken(req,res,next){
//     const bearerHeader = req.headers['authorization'];

//     if(typeof bearerHeader != undefined){
//         const bearerToken = bearerHeader.split(" ")[1];
//         req.token = bearerToken;
//         next();
//     }else{
//         res.sendStatus(403).send('Token is invalid');
//     }

// }

