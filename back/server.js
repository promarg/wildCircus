//imports
const express = require('express');
const server = express();
const port = 8080;
const connection = require('./conf');
const bodyParser = require('body-parser');
const cors = require('cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors())





server.get('/artists', (req, res) => {

    connection.query('SELECT * FROM artist', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Désoler vôtre requête n\'a pas pu être éxecuter');
        } else {
            res.json(result)
        };
    });
});




server.get('/shows', (req, res) => {
    connection.query('SELECT * FROM shows', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Désoler vôtre requête n\'a pas pu être éxecuter');
        } else {
            res.json(result)
        };
    });
});




server.get('/billeterie',(req, res)=>{
    connection.query('SELECT * FROM session',(err, result)=>{
        if (err){
            console.log(err)
            res.status(500).send('Désoler vôtre requête n\'a pas pu être éxecuter');
        }else{
            res.status(200)
            res.json(result);
        };
    });

});




server.post('/billeterie', (req, res) => {

    const formData = req.body;
    connection.query('INSERT INTO resa SET ?', formData, (err, result) => {
        if (err){
        console.log(err);
        res.status(500).send('Désoler votre requête n\'a pas pu être éxecuter');    
        }else {
            res.status(200).send('votre réservation est enregistrée')
        }
     })

})



server.listen(port, () => {
    console.log('server on port ' + port);
});