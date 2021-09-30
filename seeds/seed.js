const sequelize = require("../config/config");
const { User, Dish, } = require("../models");

const userData = require("./userData.json");
const dishData = require("./dishData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
