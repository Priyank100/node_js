const express = require('express');

const app = express();

app.get("", (req, resp) => {
    // resp.send("Welcome, " + req.query.name);
    resp.send("<h1>Welcome, This is a Home Page</h1>");
});

app.get("/about", (req, resp) => {
    // resp.send("Welcome, This is a About Page");
    resp.send(`
    <input type="text" placeholder="User Name" />
    <button>Click Me</Button>
    `);
});

app.get("/help", (req, resp) => {
    // resp.send("Welcome, This is a Help Page");
    resp.send([
        {
            name:"Abc",
            email:"abc@gm.cm"
        },
        {
            name:"Xyz",
            email:"xyz@gm.cm"
        }
    ]);
});

app.listen(5000);