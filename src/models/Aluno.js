import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Já existe um aluno cadastrado com este e-mail',
        },
        validate: {
          isEmail: 'Email inválido',
        },
      },
      idade: {
        tye: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade deve ser um número inteiro',
          },
        },
      },
      peso: {
        tye: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero ',
          },
        },
      },
      altura: {
        tye: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero ',
          },
        },
      },
      sexo: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
