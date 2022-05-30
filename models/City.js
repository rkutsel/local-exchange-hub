const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class City extends Model {}

// create fields/columns for Location model
City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lon: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'city'
  }
);

module.exports = City;
