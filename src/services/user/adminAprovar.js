const { findReceita, updateReceitaEstado } = require("@/data/user/adminAprovar")

async function updateReceita(idReceita) {
    const res = await updateReceitaEstado(idReceita)
    return res
}

module.exports = { updateReceita }


