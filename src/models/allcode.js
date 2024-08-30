"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Allcode.init(
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      value_En: DataTypes.STRING,
      value_Vi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode", // Tên model
      tableName: "allcodes", // Tên bảng trong cơ sở dữ liệu
    }
  );

  return Allcode;
};
