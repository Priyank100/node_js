const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { 
            id:13
        },
        {
            $set: {title:'Speakers', image:'https://i.pinimg.com/originals/94/1f/df/941fdf23ce99a0e7f2a4fb48b3ca79ef.png'}
        }
    )
    if(result.acknowledged && result.modifiedCount == 1) {
        console.log("data is updated")
    }
}

updateData();