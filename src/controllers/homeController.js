import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  // req.body sẽ chứa dữ liệu từ form
  let message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server ");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDservice.getAllUser();
  console.log(data);
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await CRUDservice.getUserInfobyId(userId);

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("dont found user infomation ");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDservice.updateUserData(data);
  return res.send("update done");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDservice.deleteUserById(id);
    return res.send("Delete the user succeed");
  } else {
    return res.send("User not found!");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
