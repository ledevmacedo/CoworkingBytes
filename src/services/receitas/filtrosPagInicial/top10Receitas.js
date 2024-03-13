//Receitas sorted por likes AQUI

const { procurarReceitasMaisGostos } = require("@/data/receitas/filtrosPagInicial/top10Receitas")


async function filtrarPorLikes() {
    const res = await procurarReceitasMaisGostos()
    return res
}

module.exports = { filtrarPorLikes }

