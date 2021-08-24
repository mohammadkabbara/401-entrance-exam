'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const axios = require('axios');
const PORT = process.env.PORT ;
const{getFlowerApi,addFavoriteFlower,getFavoriteFlower,deleteFavoriteFlower,updateFavoriteFlower}= require('./controller/FlowerControleer')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flowers', {useNewUrlParser: true, useUnifiedTopology: true});





app.get('/favFlowers' , getFlowerApi)

////end points
app.post('/favorite' , addFavoriteFlower)
app.get('/favorite' , getFavoriteFlower)
app.delete('/favorite/:idx' , deleteFavoriteFlower)
app.put('/favorite/:idx' , updateFavoriteFlower)
 
app.listen(PORT, () => console.log(`listening on ${PORT}`));
