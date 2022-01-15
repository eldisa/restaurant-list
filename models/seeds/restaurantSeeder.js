const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const db = require('../../config/mongoose') // 載入 mongoose
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurant_list = require('./restaurant.json').results
const user_list = require('./user.json').results

// 連線成功

db.once('open', () => {
    new Promise((resolve, _reject) => {
        user_list.forEach( (user, user_index)=> {
            const email = user.email
            const name = user.name
            bcrypt.genSalt(10)
                .then(salt => bcrypt.hash(user.password, salt))
                .then(hash => {
                    User.create({
                        name,
                        email,
                        password: hash,
                    }).then((user) => {
                        console.log('user created')
                        // 對每個user建立相對應餐廳資料
                        const userRestaurant = []
                        restaurant_list.forEach((restaurant, rest_index) => {
                            if (rest_index >= 3 * user_index && rest_index < 3 * (user_index + 1)) {
                                restaurant.userId = user._id
                                userRestaurant.push(restaurant)
                            }
                        })
                        return Restaurant.create(userRestaurant)
                    }).then(() => {
                        console.log('restaurant created')
                        if (user_index >= user_list.length - 1) {
                            resolve()
                        }
                    })
                })
        })
    }).then(() => {
        // 等待所有使用者的餐廳資料創建完成
        console.log('done')
        process.exit()
    })
})