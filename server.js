
const express = require('express');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  console.log("===========================");
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});