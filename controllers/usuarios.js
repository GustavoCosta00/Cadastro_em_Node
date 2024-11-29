const User = require('../models/usuarios');

const criar_usuario = async (req, res) => {
    try {
        // Definindo `isFunc` como `false` se não for enviado no formulário
        const usuarioData = {
            name: req.body.nome,
            email: req.body.email,
            isFunc: req.body.isFunc ? true : false
        };

        const usuario = await User.create(usuarioData);
        res.status(201).json({ usuario });
    } catch (error) {
        console.log(`Aconteceu um erro: ${error}`);
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
};

module.exports = {
    criar_usuario
};
