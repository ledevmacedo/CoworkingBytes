const { findReceitas } = require("@/data/receitas/todasReceitasAdmin")

async function procurarReceitas() {
    const res = await findReceitas()
    return res
}

module.exports = { procurarReceitas }

