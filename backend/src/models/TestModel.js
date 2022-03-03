const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const model = sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  },
  {
    underscored: true
  })
  return model
}