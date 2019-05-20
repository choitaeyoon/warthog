const pool = require("../../databasePool");

class UserTable {
  static userRegister(user) {
    const { email, nickname, password } = user;

    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT email
                FROM user
                WHERE user.email = $1`,
        [email],
        (err,
        res => {
          if (err) return reject(err);
          if (res.rows.length === 0) {
            pool.query(
              `INSERT INTO user(email, nickname, passhash)
                            VALUES($1,$2,$3) RETURNING id`,
              [email, nickname, password],
              (err, response) => {
                if (err) return reject(err);
                const userID = response.rows[0].id;
                resolve(userID);
              }
            );
          }
          else {
              return reject('Email Already Registered');
          }
        })
      );
    });
  }

  static userAuthenticate(user) {
    const { email, nickname, password } = user;
    pool.query(
      ``
    )
  }
}

module.exports = UserTable;
