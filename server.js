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
