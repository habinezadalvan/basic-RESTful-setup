module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      status: DataTypes.STRING,
      images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
      description: DataTypes.STRING,
    },
    {
      indexes: [
        {
          fields: ['createdAt'],
        },
      ],
    },
  );

  Product.associate = () => {

  };

  return Product;
};
