const express = require('express')
const bodyparser = require('body-parser')
const pry = require('pryjs')
const Post = require('./models/Post') 
const Comment = require('./models/Comment')
const cors = require('cors')

const app  = express()
app.use(bodyparser.json())  //take body key of request
app.use(cors())

const port  = 8000
app.listen(port, () => console.log("getting analed" + port ))

app.get("/home", (req,res)=>{
   res.json("an")
})

//get all the posts
app.get("/posts", (req,res) => {
  Post.findAll()
  .then(posts => res.json(posts))
})

//show a single post
app.get("/posts/:id", async (req,res) => {
    // eval(pry.it)
    post = await Post.findByPk(req.params.id)
    res.json(post)
})





// show all the comments
app.get("/comments", (req,res) => {
    Comment.findAll()
    .then(comments => res.json(comments))
})

// show a single comment 
app.get("/comments/:id", async (req, res) => {
    comment = await Comment.findByPk(req.params.id)
    res.json(comment)
})

//create a single comment
app.post("/comments", async (req,res) => {
    // eval(pry.it)
    comment = await Comment.create(req.body)
    res.json(comment)
})


//update a post
// app.patch("/posts/:id", async (req,res) => {
//     post = await Post.findByPk(req.params.id)
//     await post.update(req.body)
//     res.json(post)
// })

//delete a single post
// app.delete("/posts/:id",async (req,res) => {
//     post = await Post.findByPk(req.params.id)
//     post.destroy()
//  } )