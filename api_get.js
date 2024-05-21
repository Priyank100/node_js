const express = require('express');
const dbConnect = require('./mongodb');
const app = express();


app.get("/api/getProductList", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.find().toArray();
    resp.send(result);
});

app.listen(5000);
