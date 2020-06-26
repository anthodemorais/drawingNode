const pointModel = require('./models/Point')

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('drawing', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889,
});

const Point = pointModel(sequelize, DataTypes)

sequelize.sync()

module.exports = {
    sequelize: sequelize,
    Point: Point
}