const { DataTypes } = require('sequelize')
const {Sequelize} = require("sequelize/types");

module.exports = (sequelize) => {
  const model = sequelize.define('TestSteps', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      testId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      expectedResult: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    },
    {
      underscored: true
    })
  return model
}