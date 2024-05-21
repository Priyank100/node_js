const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne(
        {
            id:14
        }
    )
    if(result.acknowledged && result.deletedCount == 1) {
        console.log("data is deleted")
    }
}
 
deleteData();