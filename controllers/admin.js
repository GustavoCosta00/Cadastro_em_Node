const path = require("path");
const User = require("../models/usuarios");

const tela_inicial = (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === "admin" && parseInt(senha) === 1234) {
        res.sendFile(path.join(__dirname, "../views/tela_admin.html"));
    } else {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    }
};

const ver_usuarios = async (req, res) => {
    try {
        // Verifica se é uma requisição para os dados (AJAX)
        if (req.query.json === "true") {
            const usuarios = await User.find(); // Busca os usuários no MongoDB
            return res.json(usuarios); // Retorna os dados como JSON
        }

        // Caso contrário, serve o arquivo HTML
        res.sendFile(path.join(__dirname, "../views/ver_usuarios.html"));
    } catch (err) {
        console.error(`Erro ao buscar usuários: ${err}`);
        res.status(500).send("Erro ao carregar a página");
    }
};

module.exports = {
    tela_inicial,
    ver_usuarios,
};
