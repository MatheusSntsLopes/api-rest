import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalName: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode ficar vazio.',
          },
        },
      },
      fileName: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode ficar vazio.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
