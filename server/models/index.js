const User = require("./User");

/*User.hasMany(Table, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Table.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Table, {
  foreignKey: "category_id",
});

Table.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Table.hasMany(Like, {
  foreignKey: "recipe_id",
  onDelete: "CASCADE",
});

User.hasMany(Like, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
*/
module.exports = {
  User,
};
