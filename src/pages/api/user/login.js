import { procurarUsuario } from "@/data/user/login"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { nomeUsuario } = req.query

            // Verifica se o nomeUsuario foi fornecido
            if (!nomeUsuario) {
                return res.status(400).json({ error: "nomeUsuario é necessário na query string" })
            }

            // Verifica a existência do usuário pelo nomeUsuario
            const usuario = await procurarUsuario(nomeUsuario)
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" })
            }

            // Omitir a senha e outros dados sensíveis antes de retornar os dados do usuário
            const { password, ...dadosUsuario } = usuario

            // Se o usuário existir, retorna os dados do usuário (exceto a senha)
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
