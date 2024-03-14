import { verReservas } from "@/data/user/reservas";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Usando req.query para obter os dados da query string
            const { idUsuario } = req.query;

            // Verifica se o idUsuario foi fornecido
            if (!idUsuario) {
                return res.status(400).json({ error: "idUsuario é necessário na query string" });
            }

            const resultado = await verReservas(idUsuario);

            res.status(200).json({ message: "Reservas encontradas", data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao procurar reservas" });
        }
    } else {
        // Corrigindo para permitir apenas o método GET
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
