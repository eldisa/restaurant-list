const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  const userId = req.user._id
  //查詢條件: userId == req.user_id
  Todo.find({userId})  // userId: userId, 當變數名稱和屬性名稱一樣的話，可以省略後半，只留一個變數名稱。以此為例，find 條件只要填 userId 即可
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

module.exports = router
