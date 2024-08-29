// connectDB.js

const { Sequelize } = require("sequelize");

// Thiết lập kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize("hoidanit", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

// Kiểm tra kết nối
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", error);
  }
}

// Xuất module connectDB để có thể sử dụng ở các tệp khác
module.exports = connectDB;
