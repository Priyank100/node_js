const express = require('express');
const reqFilter = require('./middleware');
const app = express();

// const route = express.Router();        // for group routes


// middleware
// const reqFilter = (req, res, next) => {
//     if(!req.query.age) {
//         res.send("Please enter age");
//     } else if(req.query.age < 18) {
//         res.send("Not access this page");
//     } else {
//         next();
//     }
// }

app.use(reqFilter);     // for all routes

// route.use(reqFilter);     // for group routes

app.get("", (req, resp) => {
    resp.send("Welcome, This is a Home Page");
});

app.get("/user", reqFilter,  (req, resp) => {          // for single route
    resp.send("Welcome, This is a User Page");
});


// for group routes
// route.get("/about", (req, resp) => {
//     resp.send("Welcome, This is a About Page");
// });

// app.use('/', route);    // for group routes

app.listen(5000);