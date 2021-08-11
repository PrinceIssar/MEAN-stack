const router = require("express").Router();
const friendController = require('../controllers/friendController');


router.post("/", friendController.friend_create);
router.get("/", friendController.friend_all);
router.get("/:friendId", friendController.friend_details); // single data
router.put("/:friendId", friendController.friend_update);
router.delete("/:friendId", friendController.friend_delete);

module.exports = router;
