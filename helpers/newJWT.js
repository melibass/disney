const jwt = require('jsonwebtoken');

const newJWT = (email) => {
    return new Promise((resolve, reject) => {
        const payload = { email };

        jwt.sign(payload, process.env.JWTPRIVATEKEY, {
            expiresIn: '8h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("We couldn't create the token this time");
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    newJWT
}