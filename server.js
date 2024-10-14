// server.js
const express = require('express');
const app = express();
const path = require('path');
const port = 8081;

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Defining a route for handling client communication
app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "home.html");
});

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "about.html");
});

app.get('/others.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "others.html");
});

app.get('/seasons.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "seasons.html");
});

app.get('/season1.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "season1.html");
});

app.get('/pilot.html', (req, res) => {
    res.sendFile(__dirname + "\\" + "pilot.html");
});

app.get('/bravoMePlusLogo.png', (req, res) => {
    res.sendFile(__dirname + "\\" + "bravoMePlusLogo.png");
});

app.get('/bravoMePlusTextLogo.png', (req, res) => {
    res.sendFile(__dirname + "\\" + "bravoMePlusTextLogo.png");
});

app.get('/pilotThumbnail.png', (req, res) => {
    res.sendFile(__dirname + "\\" + "pilotThumbnail.png");
});

app.get('/placeholderImage.png', (req, res) => {
    res.sendFile(__dirname + "\\" + "placeholderImage.png");
});

app.get('/seasonOneBanner.png', (req, res) => {
    res.sendFile(__dirname + "\\" + "seasonOneBanner.png");
});

app.get('/blogPilot.mp4', (req, res) => {
    res.sendFile(__dirname + "\\" + "blogPilot.mp4");
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
