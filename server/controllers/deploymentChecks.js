const getVersion = (req, res) => {
  res.send('1')
}

const getHealth = (req, res) => {
  res.send('ok')
}

module.exports = {
  getHealth,
  getVersion,
}
