const getVersion = (req, res) => {
  res.send('2')
}

const getHealth = (req, res) => {
  res.send('ok')
}

module.exports = {
  getHealth,
  getVersion,
}
