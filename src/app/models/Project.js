module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    Project.associate = function(models) {
        Project.belongsTo(models.User, {
            foreignKey: 'user_id', as: 'user'
        });
    }

    return Project
}