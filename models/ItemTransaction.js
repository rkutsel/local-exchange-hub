const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ItemTransaction extends Model {}

ItemTransaction.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    giver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      }
    },
    offer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'offer_item',
        key: 'id',
        unique: false,
      }
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item_stage',
        key: 'id',
        unique: false,
      }
    },
    taker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'item_transaction',
  }
);

module.exports = ItemTransaction;
