const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});