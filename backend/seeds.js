const Post = require('./models/Post');
const Comment = require('./models/Comment')

Post.sync()
Comment.sync()

const posts = [
    {
    "title": "GetTrained",
    "description": "App which allows a learner to be matched with a trainer",
    "url": "https://www.youtube.com/watch?v=jG5t4QGEyGY" },
    {
        "title": "Miblog",
        "description": "App which allows a user to search blogs in a database and read them",
        "url": "https://www.youtube.com/watch?v=A70XMKwla_o&feature=youtu.be"
    },
    {
        "title": "Revit",
        "description": "Customer Management database app",
        "url": "https://www.youtube.com/watch?v=Z7I1sxwP898&feature=youtu.be"
    }
]

const comments = [{
    "content": "tes gros noyaux"
}]

//posts.forEach(post => Post.create(post))
comments.forEach(comment => Comment.create(comment))