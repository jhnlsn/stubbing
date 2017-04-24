var mysql = require('promise-mysql');
class Zoo {
  constructor() {
    this.conn = mysql.createPool({
      host: 'localhost',
      user: 'sauron',
      password: 'theonetruering',
      database: 'mordor',
      connectionLimit: 5
    });
  };

  animals() {
    this.conn.query('select * from zoo').then(results => {
      console.log('total animals: ' + results.length);
    });
  }
}

module.exports = Zoo;