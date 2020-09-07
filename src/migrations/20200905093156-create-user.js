
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,

      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull: true,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  },
};
