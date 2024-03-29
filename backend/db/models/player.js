'use strict';
const {
  Model,
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
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    no: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    club: {
      allowNull: false,
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.TEXT
    },
    bioAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smallImageUrl: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    largeImageUrl: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};