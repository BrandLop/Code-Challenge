const express = require("express");
const app = express(express.json());
const port = 3000;
const StudentsController = require("../lib/controllers/StudentsController");

app.get("/", (request,response) => {
    response.json({message: "VisualPartners API welcome"});
});

app.get("/v1/visualpartners", (request,response) => {
    const visualpartnerslist = StudentsController.getStudents();
    response.json(visualpartnerslist);
});

const server = app.listen(port, () => {
    console.log(`VisualPartners API in localhost:${port}`);
});

module.exports = {app, server};
