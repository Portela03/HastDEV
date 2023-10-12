const Sequelize = require('sequelize');
const sequelize = require('../../Db')

// Definir o modelo de usuário
const User = sequelize.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
   lockUntil: {
    type: Sequelize.DATE // Use o tipo de dados apropriado para armazenar datas/horas
  },
  loginAttempts: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0, // Inicializa como zero por padrão
  },
}, {
  timestamps: false, 
});

module.exports = User;
