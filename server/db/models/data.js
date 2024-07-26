'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
  
    static associate({Item}) {
      // this.belongsTo(Item, { foreignKey: 'titleId' })
      }
  }
  Data.init({
    titleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Items',
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
    },
    question: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Data',
    tableName: "Datas"
  });
  return Data;
};