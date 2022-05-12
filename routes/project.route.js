var express = require("express")
var router = express.Router();
const projectController = require("../controllers/projectController")



router.get('/:id',projectController.getById)
router.get('/:name',projectController.getByName)
router.get('/:phone',projectController.getByPhone)
router.get('/:email',projectController.getByEmail)
router.get('/:website',projectController.getByWebsite)
router.get('/:address',projectController.getByAddress)


router.post('/',projectController.add)
router.put('/:projectId',projectController.update)
router.delete('/:projectId',projectController.delete)


module.exports = router