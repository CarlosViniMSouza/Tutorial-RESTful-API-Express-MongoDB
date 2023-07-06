const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).send({ message: "Get all Notice"});
});

router.route('/').post((req, res) => {
    res.status(200).send({ message: "Create new Notice"});
});

router.route('/:id').get((req, res) => {
    res.status(200).send({ message: `Get Notice: ${req.params.id}`});
});

router.route('/:id').put((req, res) => {
    res.status(200).send({ message: `Update Notice: ${req.params.id}`});
});

router.route('/:id').delete((req, res) => {
    res.status(200).send({ message: `Delete Notice: ${req.params.id}`});
});

module.exports = router;