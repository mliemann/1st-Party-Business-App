const router = require("express").Router();
const { Dish } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const dishData = await Dish.findAll();

        res.status(200).json(dishData);
    }  catch (err) {
        res.status(400).json(err);
    }
});  

module.exports = router;