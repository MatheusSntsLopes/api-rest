import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) { return res.status(400).json({ errors: e.errors.map((err) => err.message) }); }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      const { id, nome, email } = users;
      return res.json({ id, nome, email });
    } catch (e) { return res.json(null); }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) { return res.json(null); }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.user.id);
      const { id, nome, email } = user;
      if (!user) { return res.status(400).json({ errors: ['Usuário não existe'] }); }

      const novosDados = await user.update({ id, nome, email });
      return res.json(novosDados);
    } catch (e) { return res.status(400).json({ errors: e.errors.map((err) => err.message) }); }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) { return res.status(400).json({ errors: ['Usuário não existe'] }); }

      await user.destroy();
      return res.json(user);
    } catch (e) { return res.status(400).json({ errors: e.errors.map((err) => err.message) }); }
  }
}

export default new UserController();
