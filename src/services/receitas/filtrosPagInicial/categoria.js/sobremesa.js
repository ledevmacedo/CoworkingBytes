const { procurarReceitassobremesa } = require("@/data/receitas/filtrosPagInicial/porCategoria.js/sobremesa")

async function filtrarPorsobremesa() {
    const res = await procurarReceitassobremesa()
    return res
}

module.exports = { filtrarPorsobremesa }

