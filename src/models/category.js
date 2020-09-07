
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Category;
};
