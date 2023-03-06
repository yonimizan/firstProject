import mysql from 'mysql';

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   
    database: 'full-stack 2'
})


con.connect((err)=>{
    if(err) {
        throw err;
    }
    console.log('connection');

})