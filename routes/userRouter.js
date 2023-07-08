const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send({ message: "Regiter the user!" });
});

router.post('/login', (req, res) => {
    res.send({ message: "Login user!" });
});

router.post('/current', (req, res) => {
    res.send({ message: "Current user moment!" });
});

module.exports = router;