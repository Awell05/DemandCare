const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataType.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        },
        {
            sequelize, 
            timestamps: true,
            createdAt: true,
            updatedAt: 'UpdateTimestamp',
            freezeTableName: true,
            underscored: true
        }
);

module.exports = User;