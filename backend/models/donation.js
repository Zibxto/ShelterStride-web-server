// models/donation.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Donation = sequelize.define("donation", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // This refers to the table name, which is 'users' in this case
                key: 'id'
            }
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
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    // Define associations
    Donation.belongsTo(sequelize.models.user, { foreignKey: 'user_id', onDelete: 'CASCADE' });

    return Donation;
};
