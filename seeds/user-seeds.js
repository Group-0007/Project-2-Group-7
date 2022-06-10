const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Peter Pan',
   
    password: 'password123'
  },
  {
    username: 'Paul Rudd',
  //: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'John Wick',
  //: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'Dan The Man',
  //: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'David and Goliath',
  //: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'Mary Had a Lamb',
  //: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'Laura Secord',
  //: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'Penny Pincher',
  //: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'Humpy Dumpty',
  //: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'Queen Vespa',
  //: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
