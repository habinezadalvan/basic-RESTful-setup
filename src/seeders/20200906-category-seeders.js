module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Categories', [
    {
      name: 'Fanitures',
      description: 'all fanitures',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
