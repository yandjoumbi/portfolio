const Sequelize = require('sequelize')
const {STRING} =  Sequelize

const seq = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

const Comment = seq.define("comments", {
    content: {
        type: STRING
    }
})

module.exports = Comment
seq.sync()