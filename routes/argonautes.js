const router = require("express").Router();
const argoCtrl = require("../controllers/argonautes");

router.post("/create", argoCtrl.createArgonaute);
/*router.get("/argonautes", argoCtrl.getAllArgonautes); 
router.put("/argonaute/:id", argoCtrl.updateArgonaute);
router.get("/argonaute/:id", argoCtrl.getArgonaute); //auth,
router.delete("/argonaute/:id",  argoCtrl.deleteArgonaute);*/

module.exports = router;
