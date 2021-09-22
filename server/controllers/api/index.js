const router = require("express").Router();
const userRoutes = require("./userRoutes");
const tableRoutes = require("./tableRoutes");


router.use("/user", userRoutes);
router.use("/tables", tableRoutes);


module.exports = router;
