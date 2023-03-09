'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  archivo.init({
    id_archivo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
     
    },
    nombre_archivo: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'archivo',
  });
  return archivo;
};