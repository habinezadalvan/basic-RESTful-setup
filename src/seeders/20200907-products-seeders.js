module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Products', [
    {
      ownerId: 1,
      title: 'idiva',
      price: '2000frw',
      status: 'available',
      images: ['image1', 'image2'],
      description: 'this is my property',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};
