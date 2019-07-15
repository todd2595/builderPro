const router = require("express").Router();
const WordController = require("../../Controllers/WordController");

router.route("/words")
  .post(WordController.create);

router.route("/saved")
.get(WordController.findAll)

// Matches with "/api/books/:id"
router
  .route("/saved/:id")
  .get(WordController.findById)
  .delete(WordController.remove);


module.exports = router;
