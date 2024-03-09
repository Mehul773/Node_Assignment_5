const express = require("express");
const router = express.Router();
const createController = require("../controllers/createController");

router.get("/", createController.getCreatePage);
router.post("/add", createController.createUser);

module.exports = router;
