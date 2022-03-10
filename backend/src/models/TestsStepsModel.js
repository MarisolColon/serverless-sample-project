const { DataTypes } = require('sequelize')

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
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      expectedResult: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      underscored: true
    })
  return model
}