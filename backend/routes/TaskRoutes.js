const { createTask, fetchTask, updateTaskById, deleteTaskById } = require('../controllers/TaskController');

const router = require('express').Router();

router.get('/',fetchTask);

//To create a task
router.post('/',createTask);

//To update a task
router.put('/:id',updateTaskById);

//To delete a task
router.delete('/:id',deleteTaskById);

module.exports = router;