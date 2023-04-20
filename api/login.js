// api/login.js

const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const router = express.Router();

router.post('/', async(req, res) => {
    const { username, password } = req.body;

    // 在MongoDB Atlas云数据库中查找用户信息
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ message: '用户名不存在' });
    }

    if (user.password !== password) {
        return res.status(400).json({ message: '密码错误' });
    }

    return res.json({ message: '登录成功' });
});

module.exports = router;