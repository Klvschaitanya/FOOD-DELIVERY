const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")
const jwtSecret = "abcdefghi123456789"

router.post("/signup", [
    body('password', "min password length is 5").isLength({ min: 5 }),
    body('name', "name length is min 5").isLength({ min: 5 }),
    body('email', "Invalid Email").isEmail()
]

    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }


        let secPassword = await bcrypt.hash(req.body.password, 10)

        try {
            await User.create({

                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false })
        }

    })

router.post('/login', [
    body('password', "min password length is 5").isLength({ min: 5 }),
    body('email', "Invalid Email").isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let email = req.body.email;
    let requestBodyPass = req.body.password;

    try {
        let userData = await User.findOne({ email })
        // console.log(userData);
        let comparePassword = await bcrypt.compare(requestBodyPass, userData.password)
        if (!comparePassword) {
            return res.status(400).json({ errors: "try logging with correct credentials" })
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken:authToken })

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }

}


)

module.exports = router