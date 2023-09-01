const Person = require('../models/person')

const getAll = (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
}

const getInfo = (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
}

const getOne = (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => {
      next(err)
    })
}

const addPerson = (req, res, next) => {
  const { body } = req

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((error) => next(error))
}

const changePerson = (req, res, next) => {
  const { body } = req

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updated) => {
      res.json(updated)
    })
    .catch((err) => {
      next(err)
    })
}

const deletePerson = (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => {
      next(err)
    })
}

const getVersion = (req, res) => {
  res.send('1')
}

const getHealth = (req, res) => {
  res.send('ok')
}

module.exports = {
  getAll,
  getInfo,
  getOne,
  addPerson,
  changePerson,
  deletePerson,
  getHealth,
  getVersion,
}
