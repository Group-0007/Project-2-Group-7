const { Post } = require('../models');

const postdata = [
  {
    title: 'Gorgeous 3 bedroom house in Aurora.',
    post_url: 'https://https://residential-matchmaker.herokuapp.com/',
    user_id: 10
  },
  {
    title: '9 bedroom mansion available in midtown.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 8
  },
  {
    title: 'Prime location, right near a dog park.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 1
  },
  {
    title: 'Nice 1 bedroom condo in Markham.',
    post_url: 'https://https://residential-matchmaker.herokuapp.com/',
    user_id: 4
  },
  {
    title: 'Lovely 4 bedroom detached home in Richmond Hill.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 7
  },
  {
    title: 'Perfect house for a new family, lots of parks and good schools nearby.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 4
  },
  {
    title: 'In search of a 3 bedroom townhome near Thornhill?  Look here!',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 1
  },
  {
    title: 'Marvelous little bungalow in downtown Toronto.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 1
  },
  {
    title: 'Delightful semi-attached home in the West End.  Open concept!',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 9
  },
  {
    title: 'Cute 2 bedroom apartment for sale in King City.',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 5
  },
  {
    title: 'Beautiful 5 bedroom single family home in Guelph.  Move In Ready!',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 3
  },
  {
    title: 'Huge 10 bedroom estate in Niagara Falls!',
    post_url: 'https://residential-matchmaker.herokuapp.com/',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
