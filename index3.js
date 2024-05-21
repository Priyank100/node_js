const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'html');

// ejs for dynamic page
app.set('view engine', 'ejs');

// use html folfer files 
app.use(express.static(publicPath));

// to remove extension from url
app.get("", (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

// for dynamic page use = res.render
app.get("/profile", (req, resp) => {
    const user = {
        name: "Priyank",
        email: "priyank@gmail.com",
        skills: ["java","dart","node js"]
    };
    resp.render('profile', {user});
});

app.get("/login", (req, resp) => {
    resp.render('login');
});

app.get("*", (req, resp) => {
    resp.sendFile(`${publicPath}/error.html`);
});


app.listen(5000);