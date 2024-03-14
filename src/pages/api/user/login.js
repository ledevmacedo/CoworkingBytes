import { procurarUsuario } from "@/data/user/login"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { idUsuario } = req.query 

            if (!idUsuario) {
                return res.status(400).json({ error: "idUsuario é necessário na query string" })
            }

            const usuario = await procurarUsuario(idUsuario)
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" })
            }

            const { password, ...dadosUsuario } = usuario

            res.status(200).json({ message: "Usuário encontrado", data: dadosUsuario })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro ao procurar usuário" })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
