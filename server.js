
const express = require('express');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const path = require('path');
const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('pets', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
    .then (() => console.log('connected!'))
    .catch (err => console.log('error' + err));

const PORT = process.env.PORT || 3001;
app.listen(3001, () => console.log(`listening to port ${PORT}`));

app.use(routes);







// app.get()
// app.post()
// app.put()
// app.delete()
