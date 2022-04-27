const Database = require('../database/db');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");

const id = uuidv4(); 

class User {

  constructor({ email, password }) 
  {
    this.email = email;
    this.password = password;
    this.error = '';
    this.token = '';
  }

  //creates hashed password
  hashPassword = async() => {
    const hashedPass = await bcrypt.hash(this.password, 8);

    this.password = hashedPass;
  }

  //adds user with provided data
  addUser = async() => {

    const sql = new Database();

    try {
      await this.hashPassword();
      
      await sql.insertUser(id, this.email, this.password)

      console.log("User -- insertUser success")
    } catch (error) {
      console.log("error -- User")
      console.log(error);
    }
  };

  findUser=async()=>{
    //compare hashed pass with inserted pass
    //if so allow auth
  }
}


module.exports = User