import { criarReserva } from "@/data/user/reservar";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const dadosReserva = req.body;
            const resultado = await criarReserva(dadosReserva);

            res.status(201).json({ message: "Reserva criada com sucesso!", data: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Sala não disponivel." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
