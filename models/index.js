// import models
const User = require('./User');
const Category = require('./Category');
const City = require('./City');
const OfferItem = require('./OfferItem');
const WishItem = require('./WishItem');
const ItemStage = require('./ItemStage');
const ItemTransaction = require('./ItemTransaction');

// Items belong to Users
OfferItem.belongsTo(User, {
  foreignKey: 'user_id',
});

WishItem.belongsTo(User, {
  foreignKey: 'user_id',
});

// Items belong to Categories
OfferItem.belongsTo(Category, {
  foreignKey: 'category_id',
});

WishItem.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Users have many Items
User.hasMany(OfferItem, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(WishItem, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Locations have many Offer Items
City.hasMany(OfferItem, {
  foreignKey: 'city_id',
  onDelete: 'CASCADE',
});

// Categories have many Items
Category.hasMany(OfferItem, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(WishItem, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// OfferItems belongToMany ItemStages (through ItemTransaction)
OfferItem.belongsToMany(ItemStage, {
  through: {
    model: ItemTransaction,
    unique: false,
  },
  foreignKey: 'offer_id'
});

// ItemStage belongToMany OfferItems (through ItemTransaction)
ItemStage.belongsToMany(OfferItem, {
  through: {
    model: ItemTransaction,
    unique: false,
  },
  foreignKey: 'stage_id'
});

module.exports = {
User,
Category,
City,
OfferItem,
WishItem,
ItemStage,
ItemTransaction
};
