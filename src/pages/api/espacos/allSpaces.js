import { encontrarSalasOcupadas, listarEspacosDisponiveis } from "@/data/espacos/allSpaces"

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET'])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    try {
        const { dia, horaInicio, horaFim, tag, capacidade } = req.query

        const capacidadeNumerica = capacidade ? parseInt(capacidade, 10) : null

        const idsEspacosOcupados = dia && horaInicio && horaFim ?
            await encontrarSalasOcupadas(horaInicio, horaFim, dia) : []

        
        const espacosDisponiveis = await listarEspacosDisponiveis(idsEspacosOcupados, tag, capacidadeNumerica)

        res.status(200).json(espacosDisponiveis)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Erro ao processar a solicitação." })
    }
}
