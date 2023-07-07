const asyncHandler = require('express-async-handler');

// @description: GET All News
// @route: GET /api/news
// @access: public
const getNews = asyncHandler(async (req, res) => {
    res.status(200).send({ message: "Get all Notice"});
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

    if (!title || !subtitle || 
        !paragraph1 || !paragraph2 || 
        !paragraph3
        ) {
        throw new Error("All Fields are mandatory! Fill them in, please!");
    }

    res.status(201).send({ message: "Create new Notice"});
});

// @description: GET an News
// @route: GET /api/news/:id
// @access: public
const getNotice = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `Get Notice: ${req.params.id}`});
});

// @description: Update an News
// @route: PUT /api/news/:id
// @access: public
const updateNotice = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `Update Notice: ${req.params.id}`});
});

// @description: Delete an News
// @route: DELETE /api/news/:id
// @access: public
const deleteNotice = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `Delete Notice: ${req.params.id}`});
});

module.exports = { getNews, createNews, getNotice, updateNotice, deleteNotice };