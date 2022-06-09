// import models
const User = require("./User");
const Category = require("./Category");
const City = require("./City");
const Comment = require("./Comment");
const OfferItem = require("./OfferItem");

// Items belong to Users
OfferItem.belongsTo(User, {
  foreignKey: "user_id",
});

// Items belong to Categories
OfferItem.belongsTo(Category, {
  foreignKey: "category_id",
});

OfferItem.belongsTo(City, {
  foreignKey: "city_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(OfferItem, {
  foreignKey: "offer_id",
});

// Users have many Items
User.hasMany(OfferItem, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Locations have many Offer Items
City.hasMany(OfferItem, {
  foreignKey: "city_id",
  onDelete: "CASCADE",
});

// Categories have many Items
Category.hasMany(OfferItem, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

OfferItem.hasMany(Comment, {
  foreignKey: "offer_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Category,
  City,
  OfferItem,
  Comment,
};
