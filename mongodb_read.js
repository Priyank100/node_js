const dbConnect = require('./mongodb');

const readData = async () => {
    let data = await dbConnect();
    let result = await data.find().toArray();
    console.log(result);
}

readData();
