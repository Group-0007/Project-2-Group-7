const { Vote } = require('../models');

const votedata = [
  {
    user_id: 9,
    post_id: 19
  }
  
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
