const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());


app.delete("/api/delete", async (req, resp) => {
    let db = await dbConnect();
    let result = await db.deleteOne(req.body)

    if(result.acknowledged && result.deletedCount == 1) {
        resp.send({message:"Data is deleted"});
    } else {
        resp.send({message:"Failed"});
    }
});

app.listen(5000);