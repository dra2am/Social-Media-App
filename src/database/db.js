//set up connection to mysql
//using mysql2 due to err code: 'ER_NOT_SUPPORTED_AUTH_MODE'
const mysql = require('mysql2/promise') ;

class Database
{
  
  constructor() 
  {
    //connect to db
    async function connectDB()
    {
      return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '679604',
        database: 'all_curls'
      });
    }

    this.createConnection = connectDB();
  }

  //connect function : test connect to db
  connect=async()=>
  {
    try {
      (await this.createConnection).connect()
      console.log("Successfully connected to database!")
    } catch (error) {
      console.log(error)
    }
  }

  //insert user into table
  insertUser=async(id, email, password)=>
  {
    try {

      return (await this.createConnection).execute('INSERT INTO user_credentials VALUES (?, ?, ?);', [id, email, password]);
  
    } catch (error) {
      console.log("insertUser -- error: "+error)
    }
  } 

  //find user by username, retrieve hashed pass
  getUser = async(email) =>
  {
    console.log("getUser -- db")

    try {

     return (await this.createConnection).execute('SELECT id, email, passwords FROM user_credentials where email=?;', [email])
     
    } catch (error) {
      console.log(error)
    }
  }
}

const db = new Database();
db.connect()

module.exports = Database
