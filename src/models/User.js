const sql = require('../database/db');
const { v4: uuidv4 } = require('uuid');

const id = uuidv4(); 

class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;

    this.addUser = () => {
      sql.execute(

        'INSERT INTO user_credentials VALUES (?, ?, ?); ', [id, this.email, this.password],

        (err, results) => {
          if (err) {
            throw err.sqlMessage;
          }

          return results;
        }
      );
    };

  }
}


module.exports = User