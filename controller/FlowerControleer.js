const axios = require('axios');
const ownerModel=require('../module/FlowerModule')





//////// get API data
const getFlowerApi = async (req ,res)=>{
    await axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(response=>{
        res.send(response.data.flowerslist);
    }).catch(err=>{
        console.lof(err)
    })
};


//////////////////

/// post methode

const addFavoriteFlower = async (req , res)=>{
    const {email , img ,desc , name}=req.body;
    ownerModel.find({email:email} , (err , data) =>{
        if (err){
            console.log(err);
        }else{
            console.log(data);
            data[0].flower.push({
                name:name,
                img:img,
                desc:desc,
            })
            data[0].save();
            res.send(data[0].flower)
        }
    })
}

/////////////////
///get methode 

const getFavoriteFlower = async (req , res)=>{
    const {email} = req.query;
    ownerModel.find({email:email} , (err , data) =>{
        if (err){
            console.log(err)
        }else{
            res.send(data[0].flower)
        }
    })
}

 ////////////////
 //// dellete methode


 const deleteFavoriteFlower = async (req, res) => {
     const idx = req.params.idx;
     const {email} = req.query;
    ownerModel.find({ email:email} , (err ,data)=>{
        if(err){
            console.log(err);
        }else{
            data[0].flower.splice(idx, 1);
            data[0].save();
            res.send(data[0].flower)
        }
    })
 }


const updateFavoriteFlower = async (req , res)=>{
    const idx = req.params.idx;
    const {name , img ,desc , email}=req.body;
    ownerModel.findOne({email:email} , (err ,data) =>{
        if (err){
            console.log(err);
        }else{
            data.flower.splice(idx,1 ,{
                name:name ,
                img:img,
                desc:desc
            })
            data.save();res.send(data.flower)
        }

    })
}





module.exports ={getFlowerApi,addFavoriteFlower,getFavoriteFlower,deleteFavoriteFlower,updateFavoriteFlower}