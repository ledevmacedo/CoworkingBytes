import { filtrarPorsobremesa } from "@/services/receitas/filtrosPagInicial/categoria.js/sobremesa";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const sobremesa = await filtrarPorsobremesa();  
            if (sobremesa) {
                return res.status(200).json(sobremesa);
            } else {
                return res.status(404).json({ message: "Receitas não encontradas." });
            }
        } else {
            // Método não permitido
            res.setHeader('Allow', ['GET']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}