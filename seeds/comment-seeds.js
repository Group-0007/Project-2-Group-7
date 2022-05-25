const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  }
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
