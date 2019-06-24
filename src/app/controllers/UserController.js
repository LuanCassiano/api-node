const { User } = require('../models');

class UserController {
    async index (req, res) {
        const users = await User.findAll({});

        return res.status(200).json({
            status: 'ok',
            users
        });
    }

    async show (req, res) {
        const user = await User.findAll({
            attributes: ['id', 'fullname', 'email', 'phone'],
            where: {
                id: req.params.id
            }
        });

        return res.status(200).json({
            status: 'ok',
            user
        });
    }

    async store (req, res) {
        const user = await User.create(req.body);

        return res.status(201).json({
            status: 'created',
            user
        });
    }

    async update (req, res) {
        const { fullname, email, phone } = req.body;

        const user = await User.update({
            fullname: fullname,
            email: email,
            phone: phone
        }, {
            where: {
                id: req.params.id
            }
        });

        return res.status(200).json({
            status: 'updated',
            user
        });
    }

    async destroy (req, res) {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.status(204).json({
            status: 'removed'
        });
    }
}

module.exports = new UserController()