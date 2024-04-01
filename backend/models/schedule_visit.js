const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ScheduleVisit = sequelize.define("schedulevisit", {
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
        inspectiondate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inspectiontime: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    // Define associations
    ScheduleVisit.belongsTo(sequelize.models.user, { foreignKey: 'user_id', onDelete: 'CASCADE' });

    return ScheduleVisit;
};
