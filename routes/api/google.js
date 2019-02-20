const router = require("express").Router();
const googleController = require("../../controller/googleController");

router 
    .route("/")
    .get(googleController.findAll);

module.exports = router;

