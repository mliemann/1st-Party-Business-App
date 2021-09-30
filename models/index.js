const User = require("./User");
const Dish = require("./Dish");
const Like = require("./Like");

User.hasMany(Dish, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Dish.belongsTo(User, {
  foreignKey: "user_id",
});

Dish.hasMany(Like, {
  foreignKey: "dish_id",
  onDelete: "CASCADE",
});

User.hasMany(Like, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Dish,
  Like
};
