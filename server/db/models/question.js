'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, GameLine }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.hasMany(GameLine, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    themeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    question: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};