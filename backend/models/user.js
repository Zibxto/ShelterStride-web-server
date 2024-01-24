
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usertype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.STRING
        },
        familysize: {
            type: DataTypes.INTEGER
        },
        monthlyincome: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interest: {
            type: DataTypes.STRING
        },
        accounttype: {
            type: DataTypes.STRING
        },
    })


    return User;
}
