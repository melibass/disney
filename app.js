const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUI = require("swagger-ui-express")
const characterRoutes = require("./router/characterRoutes");
const movieRoutes = require("./router/movieRoutes");
const userRoutes = require("./router/userRoutes");
const openApiConfiguration = require("./docs/swagger")

// const { serve, setup } = require('swagger-ui-express');
// const { configSwagger } = require('./docs/swagger');
// const swaggerJSDocs = require('swagger-jsdoc')(configSwagger); 



require('dotenv').config()



app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.json());

/**
 * Definir ruta de documentacion
 */
// app.use('/documentation', serve, setup(swaggerJSDocs));

app.use('/characters', characterRoutes);
app.use('/movies', movieRoutes);
app.use('/auth', userRoutes);





app.get('/', (req,res)=>{
    res.send('prueba');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});