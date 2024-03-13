    import { encontrarSalasOcupadas, listarEspacosDisponiveis } from "@/data/espacos/allSpaces"


    export default async function handler(req, res) {
        // Esta API irá suportar apenas métodos GET
        if (req.method !== 'GET') {
            return res.status(405).end() // Método não permitido
        }

        try {
            const { dia, horaInicio, horaFim, tag, capacidade } = req.query
            console.log("tentativa" + dia,horaFim,horaInicio) // Cannot read properties of undefined (reading 'startsWith')
            // Verifica se os parâmetros necessários foram fornecidos
            if (!dia || !horaInicio || !horaFim) {
                return res.status(400).json({ error: "Parâmetros necessários: dia, horaInicio, horaFim." })
            }

            // Converte capacidade para número, se fornecido
            const capacidadeNumerica = capacidade ? parseInt(capacidade, 10) : null

            // Encontra os IDs dos espaços ocupados
            const idsEspacosOcupados = await encontrarSalasOcupadas(horaInicio, horaFim, dia)

            // Lista os espaços disponíveis, filtrando pelos IDs ocupados e pelos parâmetros opcionais
            const espacosDisponiveis = await listarEspacosDisponiveis(idsEspacosOcupados, tag, capacidadeNumerica)

            res.status(200).json(espacosDisponiveis)

        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro ao processar a solicitação." })
        }
    }
