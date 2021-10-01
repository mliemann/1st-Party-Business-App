const router = require("express").Router();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);


// router.get("/", async (req, res) => {
//     try {
//         const dishData = await Dish.findAll();

//         res.status(200).json(dishData);
//     }  catch (err) {
//         res.status(400).json(err);
//     }
// });  

router.post('/', cors(), async (req, res) => {
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Food",
            payment_method: id,
            confirm: true
        })

        console.log("payment", payment)
        res.json({
            message: "payment successful",
            success: true
        })
    } catch (error) {
        console.log("error", error)
        res.json({
            message: "payment failed",
            success: false
        })
    }
} )


module.exports = router;