const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", 'ejs');
app.set("views",["./views","./views/admin"]);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//para metodos post
const methodOverride = require("method-override"); 
app.use(methodOverride("_method"))

let mainRoutes = require('./routes/main.js');
let rutasProductos = require('./routes/products.js');
let cartRoutes = require('./routes/prodCart.js');
let adminRoutes = require('./routes/admin.js');
let userRoutes = require('./routes/users.js');

let PUERTO = 3000
app.listen(process.env.PORT || PUERTO, () => console.log("server: ON  Port:", PUERTO));

//MAIN ROUTES (home)
app.use('/', mainRoutes);

//login-register
app.use('/', userRoutes);

//SHOPING CART
app.use('/', cartRoutes);

//PRODUCT DETAIL & PRODUCT GALERY
app.use('/products', rutasProductos);

//ADMIN
app.use('/admin', adminRoutes)

//404
app.use((req, res, next)=>{
    res.status(404).render('notFound')
})
