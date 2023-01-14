const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express()
const port = process.env.APP_PORT || 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql')

const connection = mysql.createConnection(config);

app.get('/', (req,res) => {

  const name = faker.name.firstName();
  console.log(name)
  const sqlInsert = `INSERT INTO people(name) VALUES('${name}')`
  connection.query(sqlInsert)
  const sqlSelect = `SELECT name FROM people`
  connection.query(sqlSelect, (error, results, fields) => {
    console.log(error, results)
    res.send(`
      <h1>Full Cycle Rocks</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })  
})

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})