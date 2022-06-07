const sequelize = require('../config/connection');
const {
  User,
  Category,
  City,
  OfferItem,
  WishItem,
  ItemStage,
  Comment} = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');
const categoryData = require('./categoryData.json');
const stageData = require('./stageData.json');
const offerItemData = require('./offerItemData.json');
const wishItemData = require('./wishItemData.json');
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
  await WishItem.bulkCreate(wishItemData);
  await ItemStage.bulkCreate(stageData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
