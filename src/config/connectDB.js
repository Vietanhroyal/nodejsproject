// Import thư viện Sequelize từ gói 'sequelize' để sử dụng trong việc kết nối và quản lý cơ sở dữ liệu
const { Sequelize } = require("sequelize");

// Thiết lập kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize("hoidanit", "root", null, {
  host: "localhost", // Địa chỉ máy chủ cơ sở dữ liệu
  dialect: "mysql", // Loại cơ sở dữ liệu (MySQL trong trường hợp này)
});

// Kiểm tra kết nối
async function connectDB() {
  // Hàm bất đồng bộ để kiểm tra kết nối đến cơ sở dữ liệu
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", error);
  }
}

// Xuất module connectDB để có thể sử dụng ở các tệp khác
module.exports = connectDB;
