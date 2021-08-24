const mongoose = require('mongoose');
const Schema = mongoose.Schema

const flowerSchema = new Schema({
    name: String,
    img:String,
    desc: String,

  });
  ///////////
  const ownerSchema = new Schema({
    email: String,
    flower:[flowerSchema]
  });
  const ownerModel = mongoose.model('favorite', ownerSchema);


  const seedOwner = ()=>{
      const mohammad = new ownerModel({
        email:'mohammadkabbara40@gmail.com',
        flower:[
            { 
                name:'Flowers', 
                img:'https://m.media-amazon.com/images/I/71zNWbTHzxL.jpg',
                desc:'Fresh Cut Roses 50 Roses',

            }
        ]
      });


      const roaa = new ownerModel({
        email:'roaa.abualeeqa@gmail.com',
        flower:[
            { 
                name:'Flowers', 
                img:'https://m.media-amazon.com/images/I/71zNWbTHzxL.jpg',
                desc:'Fresh Cut Roses 50 Roses',

            }
        ]
      })
      roaa.save();
      mohammad.save();
  }

  seedOwner();

  module.exports= ownerModel