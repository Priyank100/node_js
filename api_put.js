const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());


app.put("/api/update", async (req, resp) => {           // "/api/update" -> /api/update/:id     // http://localhost:5000/api/update/15
    let db = await dbConnect();
    let result = await db.updateOne(
        { id:req.body.id },                             // id:req.body.id -> id:req.params.id
        { $set: req.body}
    )

    if(result.acknowledged && result.modifiedCount == 1) {
        resp.send({message:"Data updat successfully", data:req.body});
    } else {
        resp.send({message:"Failed"});
       }
});

app.listen(5000);