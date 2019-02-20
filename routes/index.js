const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API routes triggered here
router.use("/api", apiRoutes);

//use in case the API routes are not hit - use React App
router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))

);

module.exports = router; 