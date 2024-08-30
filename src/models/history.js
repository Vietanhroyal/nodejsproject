"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  History.init(
    {
      patientId: DataTypes.INTEGER, // Sửa từ 'patienId' thành 'patientId'
      doctorId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
