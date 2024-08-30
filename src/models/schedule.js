"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    static associate(models) {}
  }
  schedule.init(
    {
      currentNumber: DataTypes.INTEGER,
      maxNumber: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "schedule",
    }
  );
  return schedule;
};
