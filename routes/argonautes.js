const router = require("express").Router();
const argoCtrl = require("../controllers/argonautes");

router.post("/create", argoCtrl.createArgonaute);
router.get("/argonautes", argoCtrl.getAllArgonautes);
router.delete("/argonaute/:id", argoCtrl.deleteArgonaute);
router.put("/argonaute/:id", argoCtrl.updateArgonaute);

module.exports = router;
