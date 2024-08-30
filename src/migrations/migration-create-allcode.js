"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("allcodes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      key: {
        // Đổi từ Key thành key để đồng nhất với model
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      value_En: {
        // Đổi từ ValueEn thành value_En để đồng nhất với model
        type: Sequelize.STRING,
      },
      value_Vi: {
        // Đổi từ ValueVi thành value_Vi để đồng nhất với model
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("allcodes");
  },
};
