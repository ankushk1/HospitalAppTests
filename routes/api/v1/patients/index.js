const express = require('express');
const router = express.Router();
const patientController = require('../../../../controllers/api/v1/patientsController');
const reportsController = require('../../../../controllers/api/v1/reportsController');


//patient and report routes
router.post('/register_patient', patientController.registerPatient);
router.post('/create_report', reportsController.createReport);
router.get('/:id/all_reports', reportsController.getAll);

//export router
module.exports = router;