"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING,
      doctorId: DataTypes.INTEGER, // Đảm bảo rằng kiểu dữ liệu là INTEGER
      patientId: DataTypes.STRING,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
