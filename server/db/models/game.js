'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, GameLine }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(GameLine, { foreignKey: 'gameId' });
    }
  }
  Game.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      gameStatus: {
        type: DataTypes.BOOLEAN
      },
      point: {
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
