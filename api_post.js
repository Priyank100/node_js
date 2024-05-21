const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());


app.post("/api/insert", async (req, resp) => {
    let db = await dbConnect();
    const result = await db.insertOne(req.body);

   if(result.acknowledged) {
    resp.send({message:"Data saved successfully", data:req.body});
   } else {
    resp.send({message:"Failed"});
   }
});

app.listen(5000);