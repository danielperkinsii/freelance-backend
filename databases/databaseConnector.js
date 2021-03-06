const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'database.sqlite3'
}) 

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

module.exports = sequelize