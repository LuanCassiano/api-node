module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    Task.associate = function(models) {
        Task.belongsTo(models.Project, {
            foreignKey: 'project_id', as: 'user'
        });
    }

    Task.associate = function(models) {
        Task.belongsTo(models.User, {
            foreignKey: 'user_id', as: 'user'
        });
    }

    return Task
}