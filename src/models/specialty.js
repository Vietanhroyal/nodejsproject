"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Specialty.init(
    {
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialty", // Sửa từ 'sepecialty' thành 'Specialty'
    }
  );
  return Specialty;
};
