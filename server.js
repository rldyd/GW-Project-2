
const express = require('express');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
<<<<<<< HEAD
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
=======
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> d3f381042a9868843325afe7b995863ac666fbc1

app.use(routes);

<<<<<<< HEAD






// app.get()
// app.post()
// app.put()
// app.delete()
=======
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  console.log("===========================");
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
>>>>>>> d3f381042a9868843325afe7b995863ac666fbc1
