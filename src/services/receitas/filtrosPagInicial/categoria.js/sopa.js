const { procurarReceitassopa } = require("@/data/receitas/filtrosPagInicial/porCategoria.js/sopa")

async function filtrarPorsopa() {
    const res = await procurarReceitassopa()
    return res
}

module.exports = { filtrarPorsopa }

