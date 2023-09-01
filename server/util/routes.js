const Router = require('express')
const persons = require('@controllers/personsController')
const checks = require('@controllers/deploymentChecks')

const router = Router()

router.get('/persons', persons.getAll)
router.get('/persons/:id', persons.getOne)
router.post('/persons', persons.addPerson)
router.delete('/persons/:id', persons.deletePerson)
router.put('/persons/:id', persons.changePerson)
router.get('/version', checks.getVersion)
router.get('/health', checks.getHealth)

module.exports = router
