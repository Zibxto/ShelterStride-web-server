// models/property.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Property = sequelize.define("property", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bathroom_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bedroom_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        toilet_num: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        furniture_num: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        furniture_num: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        key_attraction: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amenities: {
            type: DataTypes.STRING,
            allowNull: true
        },
        house_rules: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    return Property;
};
