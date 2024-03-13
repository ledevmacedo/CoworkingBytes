import { getAvailableSpaces } from '@/services/espacos/allSpaces';


export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const espacos = await getAvailableSpaces();  
     
            if (espacos) {
                return res.status(200).json(espacos);
            } else {
                return res.status(404).json({ message: "sem espaços disponiveis" });
            }
        } else {
            // Método não permitido
            res.setHeader('Allow', ['GET']);
            return res.status(405).end(`Método ${req.method} não permitido.`);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}