const mysql = require('mysql');
const connection = mysql.createConnection({
   host : 'localhost' ,
   user : 'root',
   password : 'Sofia123@git',
   database : 'wild_circus'

});
module.exports = connection;