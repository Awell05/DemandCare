const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKety: true,
            autoIncrement: true
        },
        school_closures: {
            type: DataTypes.STRING
        },
        kid_events: {
            type: DataTypes.STRING
        },
        play_dates: {
            type: DataTypes.STRING
        },
        babysitter_requests: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'

    }
);

module.exports = Category;