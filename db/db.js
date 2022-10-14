const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'containers-us-west-63.railway.app',
    user: 'root',
    password: 'S4Jk8iNUjSTDUM7VGrpW',
    database: 'railway',
    port: 7526,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
con.connect((error)=>{
    if(error){console.log(error)}
    else{console.log('Se conectó a la base de datos')}
})
module.exports = con;