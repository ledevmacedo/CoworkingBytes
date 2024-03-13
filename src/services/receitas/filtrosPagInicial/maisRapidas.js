//Receitas Ordenadas Por tempo (devo restringir a apenas 10/20 receitas?)

const { procurarReceitasMenosDuracao } = require("@/data/receitas/filtrosPagInicial/maisRapidas")


async function filtrarPorDuracao() {
    const res = await procurarReceitasMenosDuracao()
    return res
}

module.exports = { filtrarPorDuracao }

