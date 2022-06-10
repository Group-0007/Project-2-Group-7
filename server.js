const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/help');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
var morgan = require('morgan')
const fetch = require('node-fetch');

const url = 'https://realty-in-ca1.p.rapidapi.com/locations/auto-complete?Area=Quebec&CultureId=1';

//cookie timeout is 1 hour
const sess = {
    secret: 'process.env.DB_SECRET',
    cookie: {maxAge: 3600000},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'))
app.use(session(sess));

//handlebar
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
      'X-RapidAPI-Key': '6f5f17331cmshc434ece2ea4ac7ap1b6b51jsn2db748cde5ea'
    }
  };
  
  fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

//Connection to server and database
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});