'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameLine extends Model {
    static associate({ Game, Question }) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  GameLine.init({
    gameId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Games',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    gameLineStatus: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'GameLine',
  });
  return GameLine;
};