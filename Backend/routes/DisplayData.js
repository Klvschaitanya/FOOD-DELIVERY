const express = require("express")
const router = express.Router()

router.post('/foodData', (req, res) => {
    try {
        res.send([global.foodItems, global.foodCategory])
        // console.log(global.foodItems)
    }
    catch (err) {
        console.log("erorr at displaydata ", err)
    }
})

module.exports = router  