const mysql = require('mysql2');


const connection = mysql.createConnection({

    host: "localhost",
    user: 'root',
    password: 'TKgw=l$+BPCb',
    database: "team_db"
  });
  
  connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;

//connecting to the mysql possibly use the dotenv to use login secure

//throw connection error if any
