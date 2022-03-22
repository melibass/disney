const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API config
 */
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentation for Disney Api with Node.js",
        version: "1.0.0"
    },
    servers:[
        {
            url:"http://localhost:3000"
        }
    ],
    components: {
        securitySchemes:{
            bearerAuth:{
                type: "http",
                scheme: "bearer"
            }
        },

        schemas:{
            registerUser:{
                type:"object",
            required:["name","email","password"],
            properties: {
                name:{
                    type: "string"
                },
                email:{
                    type:"string"
                },
                password:{
                    type:"string"
                }
            }
            },
            listCharacters:{
                type:"object",
                required:["name_char","img_char",],
                properties: {
                    name_char:{
                        type: "string"
                    },
                    img_char:{
                        type:"string"
                    },
                    age:{
                        type:"integer"
                    },               
                    weight:{
                        type: "integer"
                    },
                    history: {
                        type:"string"
                    }
                }
                },
                createCharacters:{
                    type:"object",
                required:["name_char","img_char",],
                properties: {
                    name_char:{
                        type: "string"
                    },
                    img_char:{
                        type:"string"
                    },
                    age:{
                        type:"integer"
                    },               
                    weight:{
                        type: "integer"
                    },
                    history: {
                        type:"string"
                    }
                }
                },
                
                loginUser:{
                    type:"object",
                required:["name","email","password"],
                properties: {
                    name:{
                        type: "string"
                    },
                    email:{
                        type:"string"
                    },
                    password:{
                        type:"string"
                    }
                }
                },
            }
           

    }
      

    }


/**
 * opciones
 */
const options = {

    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]

}

const openApiConfiguration = swaggerJsdoc(options);


module.exports = openApiConfiguration;