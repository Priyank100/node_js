const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPI", () => {
    count++;
    console.log("event call", count);
});

app.get("/", (req, res) => {
    response.send('API call');
    event.emit('countAPI');
});