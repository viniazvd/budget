const router = require('express').Router()
const controller = require('./../controllers/user')

router.get('/', controller.list)
router.get('/:id', controller.getUser)
router.post('/', controller.save)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
// router.post('/authenticate', controller.authenticate);

module.exports = router