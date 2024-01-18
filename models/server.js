import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {router as authRoutes} from '../routes/auth.js';
import {router as buscarRoutes} from '../routes/buscar.js';
import {router as categoriashRoutes} from '../routes/categorias.js';
import {router as productoshRoutes} from '../routes/productos.js';
import {router as userRoutes} from '../routes/usuarios.js';
import {dbConnection} from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios'
        }

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
        this.app.use(this.paths.auth, authRoutes);
        this.app.use(this.paths.buscar, buscarRoutes);
        this.app.use(this.paths.categorias, categoriashRoutes);
        this.app.use(this.paths.productos, productoshRoutes);
        this.app.use(this.paths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo', this.port);
          });
    }
}

export { Server };