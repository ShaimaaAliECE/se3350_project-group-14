const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const md5 = require('md5');

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'musakHan-7',
    database:'algorithm_game'
});

connection.connect(function(error) {
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

app.get('/', (request, response) => {
    response.send("Working");
});

app.post('/check-admin', (request, response) => {
    let email = request.body.email;
    let password = request.body.password;

    if(email && password) {
        password = md5(password)
        let sql = `SELECT * FROM admin WHERE email = '${email}' AND password = '${password}'`;

        connection.query(sql, (err, rows) => {
            response.send(rows)
        })
    }else{
        response.send("Empty email or password")
    }
});

app.get('/create-session', (req, res) => {
    let key = (Math.random() + 1).toString(36).substring(2);
    let sql = `INSERT INTO session VALUES (NULL, '${key}')`;
    connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.send({id: rows.insertId, key: key});
    });
});

app.post('/create-analytics', (req, res) => {
    const session_id = req.body.session_id;
    const algorithm_id = req.body.algorithm_id;
    const level = req.body.level;
    const status = req.body.status;
    const time_spent = req.body.time_spent;

    let sql = `INSERT INTO analytics VALUES (NULL, ${session_id}, ${algorithm_id}, ${level}, '${status}', ${time_spent}, NOW())`;
    
    connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.send(
            {
                id: rows.insertId, 
                session_id: session_id,
                algorithm_id: algorithm_id,
                level: level,
                status: status,
                time_spent: time_spent
            }
        );
    })

});

app.get('/display-analytics', (req, res) => {
    let sql = 'SELECT * FROM analytics';

    connection.query(sql,(err, rows) =>{
        if (err) throw err;
        res.send(rows);

    })
})

app.get('/display-sessions', (req, res) => {
    let sql = 'SELECT * FROM session';

    connection.query(sql,(err, rows) =>{
        if (err) throw err;
        res.send(rows);

    })
})

app.get('/delete-sessions', (req, res) => {
    const session_id = 5
    let sql ='DELETE FROM session WHERE id = ' + session_id

    connection.query(sql,(err, rows) =>{
        if (err) throw err;
        res.send(rows)
    })
})


app.listen(5000, () => {
    console.log('App is running on port 5000')
});