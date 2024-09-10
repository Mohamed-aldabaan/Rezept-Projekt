const express = require('express');
const router = express.Router();

const rezeptController = require("../controllers/rezeptController")

// Example route
// router.get('/', (req, res, next) => {
//     console.log('API is running...');
//     next();
// }, rezeptController.getRezepte);

router.get('/', rezeptController.getRezepte);
router.get('/:id', rezeptController.getRezepteById)
router.post('/', rezeptController.createRezept);
router.put('/update/:id', rezeptController.updateRezept)
router.delete('/:id', rezeptController.deleteRezept)

module.exports = router;
