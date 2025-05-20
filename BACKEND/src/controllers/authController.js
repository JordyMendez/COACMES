const User = require('../models/userModel');

// Registro de usuario (sin encriptar)
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear el usuario con contraseña tal cual
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Faltan credenciales' });
    }

    // Buscar usuario
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar contraseña
    if (user.password !== password) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Login exitoso
    res.status(200).json({ autenticado: true });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Cambio de contraseña (sin token ni encriptado)
exports.changePassword = async (req, res) => {
  try {
    const { username, currentPassword, newPassword } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.password !== currentPassword) {
      return res.status(400).json({ message: 'Contraseña actual incorrecta' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al cambiar la contraseña', error });
  }
};

// Cambio de nombre de usuario
exports.changeUsername = async (req, res) => {
  try {
    const { currentUsername, newUsername } = req.body;

    const user = await User.findOne({ username: currentUsername });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar que el nuevo username no exista ya
    const exists = await User.findOne({ username: newUsername });
    if (exists) {
      return res.status(400).json({ message: 'El nuevo nombre de usuario ya está en uso' });
    }

    user.username = newUsername;
    await user.save();

    res.status(200).json({ message: 'Nombre de usuario actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al cambiar el nombre de usuario', error });
  }
};
