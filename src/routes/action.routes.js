const express = require('express')
const router = express.Router()
const actionController =   require('../controllers/action.controller');
// Retrieve all action
router.get('/', actionController.findAll);
// Create a new action
router.post('/', actionController.create);
// Retrieve a single action with id
router.get('/:id', actionController.findById);
// Update a action with id
router.put('/:id', actionController.update);
// Delete a action with id
router.delete('/:id', actionController.delete);
module.exports = router