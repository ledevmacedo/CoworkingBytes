const { procurarReceitasPratosPrincipais } = require("@/data/receitas/filtrosPagInicial/porCategoria.js/pratosPrincipais")

async function filtrarPorPratosPrincipais() {
    const res = await procurarReceitasPratosPrincipais()
    return res
}

module.exports = { filtrarPorPratosPrincipais }

