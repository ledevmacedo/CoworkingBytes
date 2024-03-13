// receitas ordenadas Por preço (devo restringir a apenas 10/20 receitas?)

const { procurarReceitasPreco } = require("@/data/receitas/filtrosPagInicial/maisBaratas")

async function filtrarPorPreco() {
    const res = await procurarReceitasPreco()
    return res
}

module.exports = { filtrarPorPreco }

