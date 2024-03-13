// pages/api/espacos/[id].js
import { encontrarEspaco } from '@/data/espacos/dadosSpace';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    // Verifica se o método é GET
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: `Método ${req.method} não permitido.` });
    }

    // Obtém o idEspaco da URL
    const { id } = req.query;

    try {
        console.log(id)
        // Verifica se o ID é um ObjectId válido
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "O ID fornecido é inválido." });
        }

        // Busca o espaço pelo ID
        const espaco = await encontrarEspaco(id);

        // Verifica se o espaço foi encontrado
        if (!espaco) {
            return res.status(404).json({ error: "Espaço não encontrado." });
        }

        // Retorna os dados do espaço
        return res.status(200).json(espaco);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao processar a solicitação." });
    }
}
