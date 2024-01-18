import Role from '../models/role.js';
import {Usuario, Categoria, Producto} from '../models/index.js';

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
      throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
  }

// Verificar si el correo existe
const emailExiste = async(correo = '') => {
  const existeEmail = await Usuario.findOne({correo});
  if (existeEmail) {
      throw new Error(`El correo: ${correo}, ya está registrado`);
    }
  }

  const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id: ${id}, no existe`);
      }
    }

    // Categorias
    const existeCategoriaPorId = async(id) => {
      const existeCategoria = await Categoria.findById(id);
      if (!existeCategoria) {
          throw new Error(`El id: ${id}, no existe`);
        }
      }

    // Productos
    const existeProductoPorId = async(id) => {
      const existeProducto = await Producto.findById(id);
      if (!existeProducto) {
          throw new Error(`El id: ${id}, no existe`);
        }
      }

  export {
    esRolValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
  };