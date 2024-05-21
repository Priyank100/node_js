const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            id: 14, 
            title: 'Smart Watch', 
            image: "https://e7.pngegg.com/pngimages/204/549/png-clipart-apple-watch-smartwatch-wearable-technology-apple-products-electronics-gadget-thumbnail.png"
        }
    //    [
    //        {id:'12', title:'Tablet', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4innNlUU4ldcyY5K3v3JzM0S7dmBrs3FoJLIsEAM6XXHTvHfJzdk1ea3YGFx8zqaxv0&usqp=CAU"},
    //        {id:'13', title:'Speakers', image: "https://i.pinimg.com/originals/94/1f/df/941fdf23ce99a0e7f2a4fb48b3ca79ef.png"}
    //    ]
   );

   if(result.acknowledged) {
       console.log("data is inserted")
   }
 }
 
 insertData();