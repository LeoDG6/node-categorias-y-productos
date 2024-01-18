import { Router } from "express";
import { check } from "express-validator";
import { esAdminRole, validarCampos, validarJWT } from "../middlewares/index.js";
import { actualizarProducto, borrarProducto, crearProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.js";
import { existeProductoPorId } from "../helpers/db-validators.js";
import { existeCategoriaPorId } from "../helpers/db-validators.js";

const router = Router();

router.get('/', obtenerProductos);

router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], obtenerProducto);

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mongo válido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto);

router.put('/:id', [
    validarJWT,
    //check('categoria', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], actualizarProducto);

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], borrarProducto);

export {router};