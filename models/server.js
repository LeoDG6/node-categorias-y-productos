import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {router as userRoutes} from '../routes/usuarios.js';
import {router as authRoutes} from '../routes/auth.js';
import {dbConnection} from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, authRoutes);
        this.app.use(this.usuariosPath, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo', this.port);
          });
    }
}

export { Server };