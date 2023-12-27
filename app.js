import {Server} from "./models/server.js";

const server = new Server();

server.listen();


/*
    Se instalan los paquetes:
    PS D:\Node\09-alcance-del-restserver-y-mantenimiento-de-la-coleccion-de-usuarios> npm i mongoose
    PS D:\Node\09-alcance-del-restserver-y-mantenimiento-de-la-coleccion-de-usuarios> npm i bcryptjs
    PS D:\Node\09-alcance-del-restserver-y-mantenimiento-de-la-coleccion-de-usuarios> npm i express-validator
    
    Recuperar los archivos originales en caso de cambios:
    git checkout -- .
*/