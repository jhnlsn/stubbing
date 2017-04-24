var mysql = require('promise-mysql');
let log = require('metalogger')();
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
    return this.conn.query('select * from zoo').tap(results => {
      log.info(`total animals: ${results.length}`);
    });
  }
}

module.exports = Zoo;