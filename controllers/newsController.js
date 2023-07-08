const asyncHandler = require('express-async-handler');
const News = require('../models/newsModel');

// @description: GET All News
// @route: GET /api/news
// @access: public
const getNews = asyncHandler(async (req, res) => {
    const news = await News.find();

    res.status(200).send(news);
});

// @description: Create New Notice
// @route: POST /api/news
// @access: public
const createNews = asyncHandler(async (req, res) => {
    console.log("Content posted is: \n", req.body);

    const { 
        title, subtitle, 
        paragraph1, paragraph2, 
        paragraph3 
    } = req.body;

    if (!title || !subtitle || !paragraph1) {
        throw new Error("These 3 fields are mandatory! Fill them in, please!");
    }

    const notice = await News.create({
        title, 
        subtitle, 
        paragraph1, 
        paragraph2, 
        paragraph3
    });

    res.status(201).send(notice);
});

// @description: GET an News
// @route: GET /api/news/:id
// @access: public
const getNotice = asyncHandler(async (req, res) => {
    const notice = await News.findById(req.params.id);

    if(!notice) {
        res.status(404);
        throw new Error({ message: "Notice not found!" });
    }
    
    res.status(200).send({ message: `Get notice of ID: ${req.params.id}` });
});

// @description: Update an News
// @route: PUT /api/news/:id
// @access: public
const updateNotice = asyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);

    if(!news) {
        res.status(404);
        throw new Error({ message: "Notice not found!" });
    }

    const updatedNotice = await News.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).send(updatedNotice);
});

// @description: Delete an News
// @route: DELETE /api/news/:id
// @access: public
const deleteNotice = asyncHandler(async (req, res) => {
    const notice = await News.findById(req.params.id);

    if(!notice) {
        res.status(404);
        throw new Error({ message: "Notice not found!" });
    }

    await News.deleteOne({ _id: req.params.id });

    res.status(200).send(notice);
});

module.exports = { getNews, createNews, getNotice, updateNotice, deleteNotice };
