const adapter = require('../adapter/user')

const get = async (req, res) => {
  const result = await adapter.get()
  return res.json(result)
}
const post = async (req, res) => {
  const { body } = req
  try {
    const result = await adapter.post(body)
    return res.json(result)
  } catch (err) {
    return res.json({ message: err.message })
  }
}

module.exports = { get, post }
