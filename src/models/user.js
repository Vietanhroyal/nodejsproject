"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      roleId: DataTypes.STRING, // Sửa từ 'roleid' thành 'roleId' để đồng nhất cách đặt tên

      positionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
