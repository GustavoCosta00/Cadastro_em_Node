const express = require("express")
const path = require("path")
const PORTA = process.env.PORT || 8081
const app = express()
const bodyParser = require('body-parser')
const connectDb = require('./db/connect')
require("dotenv").config()


// MIDELLWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.set('view engine', 'ejs');



// CHAMANDO ROTAS
const admin = require("./routes/admin")
const usuario = require("./routes/usuarios")

app.use("/admin",urlencodedParser, admin)
app.use("/usuario", urlencodedParser, usuario)



app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get("/h", (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'tela_admin.html'))
})



// RODANDO O APLICATIVO 

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORTA, () => { console.log(`Servidor rodando na porta ${PORTA}`)})
    } catch (error) {
        console.log(`Aconteceu um erro na inicialização do servidor ${error}`)
    }
}

start();