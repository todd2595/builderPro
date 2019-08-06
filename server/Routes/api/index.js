const router = require("express").Router();
const WordController = require("../../Database/Controllers/WordController");

router.route("/words")
.post(WordController.create);

router.route("/saved")
.get(WordController.findAll);

router
  .route("/saved/:id")
  .get(WordController.findById)
  .delete(WordController.remove);


module.exports = router;
