const Sequelize = require("sequelize");

const connection = new Sequelize('sistemaperguntas', 'root', 'matheusestranho231',{
    host: 'localhost',
    dialect: 'mysql' 
});

module.exports = connection;