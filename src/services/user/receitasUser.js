const { findReceitasUsuario } = require("@/data/user/receitasUser")


async function procurarReceitasUsuario(idDoUsuario) {
    const res = await findReceitasUsuario(idDoUsuario)
    return res
}

module.exports = { procurarReceitasUsuario }


