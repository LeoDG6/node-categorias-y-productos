import jwt from "jsonwebtoken";

// const generarJWT = (uid = '') => {
//     return new Promise((resolve, reject) => {
//         const payload = {uid};
//         jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
//             expiresIn: '4h'
//         }, (err, token) => {
//             if (err) {
//                 console.log(err);
//                 reject('No se pudo generar el token');
//             } else {
//                 resolve(token);
//             }
//         });
//     })
// }

const generarJWT = async(uid = '') => {
    const payload = {uid};
    try {
        const token = await jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        });
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error);
        throw new Error('No se pudo generar el token');
    }
}

export {generarJWT}