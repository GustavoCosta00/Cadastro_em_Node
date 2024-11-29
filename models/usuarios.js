const mongoose = require("mongoose")

const Users = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'O campo nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O campo email é obrigatório']
    },
    isFunc: {
        type: Boolean,
        required: [true, 'Informe se é um usuário ou funcionário'],
        default: false
    }
});


module.exports = mongoose.model('Usuarios', Users)