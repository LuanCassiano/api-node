module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    })

    return User
}