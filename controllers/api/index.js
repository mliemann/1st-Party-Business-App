const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dishRoutes = require("./dishRoutes");
const paymentRoutes = require("./paymentRoutes");


router.use("/user", userRoutes);
router.use("/dish", dishRoutes);
router.use("/payment", paymentRoutes);


module.exports = router;
