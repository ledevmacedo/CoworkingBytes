// Receitas saudaveis // com menos calorias

const { procurarReceitasMenosCalorias } = require("@/data/receitas/filtrosPagInicial/maisSaudaveis")

async function filtrarPorCalorias() {
    const res = await procurarReceitasMenosCalorias()
    return res
}

module.exports = { filtrarPorCalorias }

