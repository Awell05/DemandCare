const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./User');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user_id: {
            type: DataTypes.INTEGER,
           
        }
    }
)