require('dotenv').config();

const { PASSWORD } = process.env;

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'example@example.com',
      username: 'johndoe',
      password: PASSWORD,
      phoneNo: '+230494484475',
      address: 'Kigali, Remera',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
