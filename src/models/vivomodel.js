import { Schema, model } from "mongoose";

const vivoesquema = new Schema({
    nome: { type: String, required: true },
    dataNasicmento: { type: Date, required: true },
    telefone: { type: Number, required: true },
    cpf: { type: Number, required: true },
    telefone: {
        type: [Number],
        required: true
    }


})
const modelovivo = model('vivo', vivoesquema)

export default modelovivo