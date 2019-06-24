const { Project } = require('../models');

class ProjectController {
    async index(req, res) {
        const project = await Project.findAll({});

        return res.status(200).json({
            status: 'ok',
            project
        });
    }

    async show (req, res) {
        const project = await Project.findAll({
            attributes: ['id', 'title', 'description'],
            where: {
                id: req.params.id
            }
        });

        return res.status(200).json({
            status: 'ok',
            project
        });
    }

    async store (req, res) {
        const project = await Project.create(req.body);

        return res.status(201).json({
            status: 'created',
            project
        });
    }

    async update (req, res) {
        const { title, description } = req.body;

        const project = await Project.update({
            title: title,
            description: description
        }, {
            where: {
                id: req.params.id
            }
        });

        return res.status(200).json({
            status: 'updated',
            project
        });
    }

    async destroy (req, res) {
        await Project.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.status(204).json({
            status: 'removed'
        });
    }
}

module.exports = new ProjectController();