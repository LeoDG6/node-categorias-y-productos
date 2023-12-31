import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/auth.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();
  
router.post('/login', [
    check('correo', 'El correo es obligarorio').isEmail(),
    check('password', 'La contraseña es obligaroria').not().isEmpty(),
    validarCampos
], login);


export {router};