'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genres.associate = (models) => {
        Genres.hasMany(models.Movies, {
            as: "Movies",
            foreignKey: "genre_id",
        });
    };
    }
  }
  Genres.init({
    name_gr: DataTypes.STRING,
    img_gr: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Genres',
    timestamps: false
  });
  return Genres;
};