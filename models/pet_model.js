const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model { }

Pets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isNumeric: true
            }

        },
        pet_health: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }

)

module.exports = Pets