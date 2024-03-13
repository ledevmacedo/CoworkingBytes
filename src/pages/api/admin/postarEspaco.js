/* POST /api/receitas/postarReceitas*/
export default async function handler(req, res) {
    // criar spaces
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido." });
    }
    try {
        const {  } = req.body // coisas a ser envadas pelo frontend
        const isUnique = await verificaSeExiste(ingredientes, modoPreparo) // necessario? 
        if (!isUnique) {
            return res.status(400).json({
                message: "Este espaço já existe",
                error: "Algo correu errado."
            })
        }
        await createReceita() // coisas a ir para a db
        return res.status(201).json({
            message: "Espaço criado com sucesso!",
            titulo
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro" });
    }
}