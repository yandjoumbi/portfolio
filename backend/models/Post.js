const Sequelize = require('sequelize')
const {STRING, INTEGER} =  Sequelize

const seq = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

const Post = seq.define("posts", {
    title: {
        type: STRING
    }, 
    description: {
        type: STRING
    },
    url: {
        type: STRING
    }
})

module.exports = Post
seq.sync()