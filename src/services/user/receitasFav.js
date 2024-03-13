const { findReceitasFavUser } = require("@/data/user/receitasFav")

async function procurarReceitasFavoritas(idDoUsuario) {
    const res = await findReceitasFavUser(idDoUsuario)
    return res
}

module.exports = { procurarReceitasFavoritas }


