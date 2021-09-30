const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Dish extends Model {
  
}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },

  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);

module.exports = Dish;