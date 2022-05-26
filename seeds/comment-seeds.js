const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Love this house!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Great location!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Schools in this area are amazing, interested in more information!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Love the design!  Are their dog parks in the area?',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Neat layout, kitchen needs work though.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Interested.  Contacting you now.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'This would be perfect if it had a pool.',
    user_id: 7,
    post_id: 7
  },
  {
    comment_text: 'Who did your windows?  I love the shutters!',
    user_id: 8,
    post_id: 8
  },
  {
    comment_text: 'This is a real comment from a real person.',
    user_id: 9,
    post_id: 9
  },
  {
    comment_text: 'Location is not great but I could get used to it.',
    user_id: 10,
    post_id: 10
  },
  {
    comment_text: 'I just bought a house down the street, what a great neighbourhood!',
    user_id: 1,
    post_id: 11
  },
  {
    comment_text: 'What is the asking price?',
    user_id: 2,
    post_id: 12
  },
  {
    comment_text:
      'Grew up down the street from here, lots of memories',
    user_id: 3,
    post_id: 13
  },
  {
    comment_text:
      'This is my house!  You want to buy it!',
    user_id: 4,
    post_id: 14
  },
  {
    comment_text: 'I will be able to afford something like this one day.',
    user_id: 5,
    post_id: 15
  },
  {
    comment_text: 'Grass looks great, I want your gardners number.',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text:
      'Is it really a great location?',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Is this zoned for 3 garages?',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text:
      'Love this house, totally contacting you now.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'The best poke bowl place is just around the corner from this place.  You will not regret going there.',
    user_id: 9,
    post_id: 5
  },
  {
    comment_text: 'Sorry, I just bought this one.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'Next week I will be making an offer on this place.',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'This house is infested with rats.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'I would love to buy this place, but it is way overpriced in my opinion.',
    user_id: 8,
    post_id: 9
  },
  {
    comment_text:
      'This is going to be my next purchase.',
    user_id: 1,
    post_id: 10
  },
  {
    comment_text: 'The person who lives next door to this person is nuts!  You have been warned.',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'This comment has been removed by a moderator',
    user_id: 10,
    post_id: 2
  },
  {
    comment_text: 'Does anyone else see the thing in the bottom left corner?',
    user_id: 3,
    post_id: 11
  },
  {
    comment_text: 'Cute house, might buy later.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text: 'Go looking for oil change videos and I end up buying a house.  Wild world.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Residential Matchmaker is the best.',
    user_id: 10,
    post_id: 15
  },
  {
    comment_text: 'I once saw a chupacabra in these parts.',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'There is a train track behind this place, 11pm train!',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Purple flowers all over the place, it is so beautiful',
    user_id: 8,
    post_id: 12
  },
  {
    comment_text: 'Found out about this place through my realtor.  Jokes on him, no commission!',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Already sold!  Figures.',
    user_id: 5,
    post_id: 7
  },
  {
    comment_text:
      'Made an offer on this place yesterday. Fingers crossed',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Very excited to see this house on Residential Matchmaker.  Watching this post closely!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Saw this house yesterday. Did not disappoint.',
    user_id: 9,
    post_id: 7
  },
  {
    comment_text:
      'Maybe add some more flowerbeds to the front?  Just my two cents.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Is this area good to raise kids?',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Quiet and full of wildlife!  Love the look of this place.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text:
      'No other property on this site is as big as this one.',
    user_id: 2,
    post_id: 8
  },
  {
    comment_text: 'Priced properly, this place would sell fast.',
    user_id: 10,
    post_id: 9
  },
  {
    comment_text: 'Leave it to this guy to have this house.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
