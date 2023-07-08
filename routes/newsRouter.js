const express = require('express');
const router = express.Router();
const { 
    getNews, createNews, 
    getNotice, updateNotice, deleteNotice 
} = require('../controllers/newsController');

router.route('/').get(getNews).post(createNews);
router.route('/:id').get(getNotice).put(updateNotice).delete(deleteNotice);

module.exports = router;
