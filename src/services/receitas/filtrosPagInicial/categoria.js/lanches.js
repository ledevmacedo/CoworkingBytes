const { procurarReceitasLanches } = require("@/data/receitas/filtrosPagInicial/porCategoria.js/lanches")

async function filtrarPorLanches() {
    const res = await procurarReceitasLanches()
    return res
}

module.exports = { filtrarPorLanches }

