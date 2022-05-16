const express = require("express");
const app = express(express.json());
const port = 3000;

app.get("/", (request,response) => {
    response.json({message: "VisualPartners API welcome"});
});

const server = app.listen(port, () => {
    console.log(`VisualPartners API in localhost:${port}`);
});

module.exports = {app, server};
