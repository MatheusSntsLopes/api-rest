const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'teset@gmail.com',
      password_hash: await bcrypt.hashSync('123456', 10),
      created_at: new Date(),
      update_at: new Date(),
    }], {});
  },

  async down() {},
};
