//filtrar categoria entras//filtrar categoria entras~

const { procurarReceitasEntradas } = require("@/data/receitas/filtrosPagInicial/porCategoria.js/entradas")


async function filtrarPorEntradas() {
    const res = await procurarReceitasEntradas()
    return res
}

module.exports = { filtrarPorEntradas }

