import vivo from "../models/vivomodel.js"

export async function store(req,res) {
    try {
        const vivos = await vivo.create(req.body)
        res.status(200).json(vivos)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
    }
}

export async function index(req, res) {
    try {
        const vivos = await vivo.find() .exec()
        res.status(200).json({mensagem: " listado com sucesso"})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
    }
    
}
export async function update(req, res) {
    try {
        const vivos = await vivo.findByIdAndUpdate() .exec()
        res.status(200).json({mensagem: " listado com sucesso", vivos})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
    }
    
}