const express = require('express');
const router = express.Router();
const error = '<h1>Invalid URL</h1>';

const ul_links = '<ul>\
                    <li><a href="/">Main Page</a></li>\
                    <li><a href="/about">About The Assignment</a></li>\
                    <li><a href="/owners">List All Owners</a></li>\
                    <li><a href="/owners/new">Enter a New Car Owner</a></li>\
                    <li><a href="/owners/:id">List Details of a Single Owner</a></li>\
                    <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
                    <li><a href="/cars">Display a Graph of Cars</a></li>\
                </ul>'

path = '/';

router.get(path, function(req, res) {
    res.send(ul_links + '<h1>Display a list of all car makes and how many owners each has</h1>');
});

router.put(path, function(req, res) {
    res.send(error);
});

router.post(path, function(req, res) {
    res.send(error);
});

router.delete(path, function(req, res) {
    res.send(error);
});

// Export this router to index.js
module.exports = router;