const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.resolve(__dirname, './public')))

let PORT = 3000
app.listen(PORT, () => console.log("server: ON  Port:", PORT))

//HOME
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

//PRODUCT GALERY
app.get('/Products', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/products_galery.html"))
})

//PRODUCT DETAIL
app.get('/X', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/XXXX.html"))
})

//SHOPING CART
app.get('/X', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/XXXX.html"))
})

//LOGIN
app.get('/X', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/XXXX.html"))
})

//REGISTER
app.get('/X', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/XXXX.html"))
})
