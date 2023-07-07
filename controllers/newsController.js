// @description: GET All News
// @route: GET /api/news
// @access: public
const getNews = (req, res) => {
    res.status(200).send({ message: "Get all Notice"});
}

// @description: Create New Notice
// @route: POST /api/news
// @access: public
const createNews = (req, res) => {
    res.status(201).send({ message: "Create new Notice"});
}

// @description: GET an News
// @route: GET /api/news/:id
// @access: public
const getNotice = (req, res) => {
    res.status(200).send({ message: `Get Notice: ${req.params.id}`});
}

// @description: Update an News
// @route: PUT /api/news/:id
// @access: public
const updateNotice = (req, res) => {
    res.status(200).send({ message: `Update Notice: ${req.params.id}`});
}

// @description: Delete an News
// @route: DELETE /api/news/:id
// @access: public
const deleteNotice = (req, res) => {
    res.status(200).send({ message: `Delete Notice: ${req.params.id}`});
}

module.exports = { getNews, createNews, getNotice, updateNotice, deleteNotice };