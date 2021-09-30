const path = require('path');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const routes = require('./controllers');
const { generateUploadURL } = require("./s3.js")

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});



app.use(cors());

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


const app = express();
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/payment', cors(), async (req, res) => {
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

app.listen(process.env.PORT || 4000, () => {
    console.log("server is listening on 4000")
})