const Database = require('../database/db');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");

const id = uuidv4(); 

class User {

  constructor({ email ='', password='' }) 
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
      
      const result = await sql.insertUser(id, this.email, this.password)

      if(!result[0])
      {
        throw new Error("addUser -- unable to add user")
      }

      return true;
      
    } catch (error) {
      console.log("Error -- User: "+error);
    }
  };

  findUser=async()=>{
    //compare hashed pass with inserted pass, if so allow auth
    try {
      console.log("findUser -- called")

      const sql = new Database();

      const result = await sql.getUser(this.email)
      //object containing rows
      if(result[0][0])
      {
        const pass = result[0][0].passwords
        if (!await bcrypt.compare(this.password, pass))
        {
          throw new Error("Unable to login")
        }
  
        return true;
      }

      throw new Error("Unable to login -- user not found");

    } catch (error) {
      console.log("Error at Users.js: "+error)
    }
  }
}


module.exports = User