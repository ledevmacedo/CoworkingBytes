//Receitas Ordenadas Por tempo (devo restringir a apenas 10/20 receitas?)

import { filtrarPorDuracao } from "@/services/receitas/filtrosPagInicial/maisRapidas";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const duracao = await filtrarPorDuracao();  
            if (duracao) {
                return res.status(200).json(duracao);
            } else {
                return res.status(404).json({ message: "Receitas não encontradas." });
            }
        } else {
            // Método não permitido
            res.setHeader('Allow', ['GET']);
            return res.status(405).end(`Metodo ${req.method} não permitido.`);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}