const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        category_id: {
            type: DataTypes.STRING,
            // foreignKey
        },
        title: {
            type: DataTypes.STRING,
        },
        body:{
            type: DataTypes.String
        }
    },
    {sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    modelName: 'posts'
}
);

module.exports = Posts;