import bcrypt from "bcryptjs";
import db from "../models/index";
import { raw } from "body-parser";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName || null, // Khớp với tên trường trong form
        lastName: data.lastName || null, // Khớp với tên trường trong form
        address: data.address || null, // Khớp với tên trường trong form
        phonenumber: data.phoneNumber || null, // Khớp với tên trường trong form
        gender: data.gender === "1" ? true : false, // Chuyển đổi giá trị gender
        roleId: data.roleId || null, // Khớp với tên trường trong form
        image: data.image || null, // Nếu bạn có trường image, khớp với tên trong form (nếu không có, có thể bỏ qua)
      });
      resolve("ok create a new user");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise((resolve, reject) => {
    try {
      var hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
let getAllUser = () =>{
  return new Promise ((resolve,reject)=>{
    try{
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users)
    }catch(e){
      reject(e)
    }


  }
  )

}

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
};
