const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Tag.belongsToMany(Product, { through: 'product_tag', foriegnKey: 'product_id' });
// Product.belongsToMany(Student, { through: 'product_tag', foriegnKey: 'product_id' });

module.exports = Tag;
