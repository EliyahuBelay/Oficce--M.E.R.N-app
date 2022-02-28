const workerRout = require('express').Router();
const workerController = require('../Controllers/workersController')

workerRout.get('/',workerController.GetAllWorkers)

workerRout.get('/:id',workerController.GetById)

workerRout.post('/',workerController.AddAWorker)

workerRout.put('/:id',workerController.EditWorker)

workerRout.delete('/:id',workerController.DeleteWorker)

module.exports = workerRout;