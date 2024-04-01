const { DataTypes } = require('sequelize');

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-NG', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  timeZone: 'Africa/Lagos', // Set the time zone to Nigerian time
});

module.exports = (sequelize) => {
    const Subscription = sequelize.define("subscription", {
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
        plan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spacename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        moveindate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subscriptiondate: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: formattedDate
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending"
        }
    });

    // Define associations
    Subscription.belongsTo(sequelize.models.user, { foreignKey: 'user_id', onDelete: 'CASCADE' });

    return Subscription;
};
