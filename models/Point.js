module.exports = (sequelize, DataTypes) => {

    return sequelize.define('point', {
    
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {

    });

}