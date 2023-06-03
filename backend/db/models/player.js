'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    team: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    club: {
      allowNull: false,
      type: DataTypes.STRING
    },
    achievements: {
      type: DataTypes.TEXT
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE,
      defaultValue: sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE,
      defaultValue: sequelize.fn('now'),
    }
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};