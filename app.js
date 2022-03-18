const express = require('express');
const app = express();
const cors = require('cors');
const characterRoutes = require("./router/characterRoutes")
require('dotenv').config()



app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.json());

app.use('/characters', characterRoutes)





app.get('/', (req,res)=>{
    res.send('prueba');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});