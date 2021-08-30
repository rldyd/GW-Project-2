
const express = require('express');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
// <<<<<<< maxsimp
// const path = require('path');
// const { Sequelize } = require('sequelize');


app.engine("handlebars", hbs.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// // Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('pets', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// sequelize.authenticate()
//     .then (() => console.log('connected!'))
//     .catch (err => console.log('error' + err));

// const PORT = process.env.PORT || 3001;
// app.listen(3001, () => console.log(`listening to port ${PORT}`));

// app.use(routes);







// // app.get()
// // app.post()
// // app.put()
// // app.delete()
// =======
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   console.log("===========================");
//   app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
// });
// 
