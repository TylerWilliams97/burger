// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'j2jpqkusnduklz3r',
  password: 'bm8ozh4bu9v4vgyg',
  database: 'rxn6d7tozwdu5v0w',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;