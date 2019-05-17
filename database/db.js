const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  databse: 'amazon',
});

connection.connect();

const insertIntoDB = (id, username, link, productTag) => {
  const sql = `INSERT INTO photos (id, link, username, tag)
               VALUES ('${id}', '${link}', '${username}', '${productTag}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('record inserted successefully!');
    }
  })
}

module.exports = {
  insertIntoDB,
};