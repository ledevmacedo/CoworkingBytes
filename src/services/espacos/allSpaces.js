const { findSpaces } = require("@/data/espacos/allSpaces")

async function getAvailableSpaces() {
    const res = await findSpaces()
    return res
}

module.exports = { getAvailableSpaces }

