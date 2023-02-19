const { UserModel } = require("../models/User.model");

const addUsers = async () => {
  try {
    let response = await fetch("https://randomuser.me/api/?results=50");
    response = await response.json();
    let data = await UserModel.insertMany(response.results);
    return { data: data, Length: data.length, message: "Success" };
  } catch (error) {
    return { message: "Error", description: error };
  }
};

const deleteUsers = async () => {
  try {
    let response = await UserModel.deleteMany();
    return response;
  } catch (error) {
    return error;
  }
};
module.exports = { addUsers, deleteUsers };
