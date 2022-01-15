const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// 設定index頁面路由
//所有餐廳
router.get('/', (req, res) => {
    const search_action = "/search"
    const range ="全部餐廳"
    Restaurant.find()
        .lean()
        .sort({_id: 'asc'})
        .then(restaurants => res.render('index', {restaurants, search_action, range}))
        .catch(error => console.log(error))
})
//user 的餐廳
router.get('/own', (req, res) => {
    const search_action = "/own/search"
    const range ="我的餐廳"
    const userId = req.user._id
    Restaurant.find({userId})
        .lean()
        .sort({_id: 'asc'})
        .then(restaurants => res.render('index', {restaurants, search_action, range}))
        .catch(error => console.log(error))
})

// 搜尋全部的餐廳
router.get('/search', (req, res) => {
    const search_action = "/search"
    const range ="全部餐廳"
    const keyword = req.query.keyword.toLowerCase().trim()
    Restaurant.find()
        .lean()
        .then(restaurants => {
            restaurants = restaurants.filter(restaurant => {
                return restaurant.name.toLowerCase().includes(keyword) || restaurant.name_en.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
            })
            res.render('index', {restaurants, keyword, search_action, range})
        })
        .catch(error => console.log(error))
})

//在 user 的餐廳中搜尋
router.get('/own/search', (req, res) => {
    const search_action = "/own/search"
    const range ="我的餐廳"
    const keyword = req.query.keyword.toLowerCase().trim()
    const userId = req.user._id // 定義userId
    Restaurant.find({userId}) // 找userId相符的所有餐廳
        .lean()
        .then(restaurants => {
            restaurants = restaurants.filter(restaurant => {
                return restaurant.name.toLowerCase().includes(keyword) || restaurant.name_en.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
            })
            res.render('index', {restaurants, keyword, search_action, range})
        })
        .catch(error => console.log(error))
})
module.exports = router