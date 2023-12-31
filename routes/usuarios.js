import { Router } from "express";
import { check } from "express-validator";
import { usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut } from "../controllers/usuarios.js";
import {validarCampos, validarJWT, esAdminRole, tieneRole} from '../middlewares/index.js';
import {esRolValido, emailExiste, existeUsuarioPorId} from '../helpers/db-validators.js';

const router = Router();
  
  router.get('/', usuariosGet);

  router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
  ], usuariosPut);

  router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({min: 6}),
    check('correo').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
  ], usuariosPost);

  router.delete('/:id', [
    validarJWT,
    esAdminRole,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos 
  ], usuariosDelete);

  router.patch('/', usuariosPatch);

export {router};