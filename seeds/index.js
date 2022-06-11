const sequelize = require('../config/connection');
const {
  User,
  Category,
  City,
  OfferItem,
  Comment} = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');
const categoryData = require('./categoryData.json');
const offerItemData = require('./offerItemData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await City.bulkCreate(cityData);
  await Category.bulkCreate(categoryData);
  await OfferItem.bulkCreate(offerItemData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
