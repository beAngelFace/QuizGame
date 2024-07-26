"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Data }) {
      // this.hasMany(Data, { foreignKey: 'titleId' })
    }
  }
  Item.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      foto: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
