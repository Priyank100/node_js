const dbConnect = require('./mongodb');
// const {MongoClient} = require('mongodb');

// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// method 1
// async function getData() {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('products');
//     let data = await collection.find().toArray();
//     console.log(data)
// }
//
// getData();


// method 2
// async function dbConnect() {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     return db.collection('products');
// }


// method 1
// dbConnect().then((res)=>{
//     res.find({id:10}).toArray().then((data)=>{
//         console.log(data);
//     });
// });


// method 2
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();
