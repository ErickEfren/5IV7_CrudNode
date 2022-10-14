const express = require('express');
const app = express();
const PORT = process.env.PORT || 7526;
app.set('view engine', '.ejs');
app.use(express.urlencoded({extended:false}));
app.use('/', require('./router.js'));
app.listen(PORT, ()=>{
    console.log('Servidor en linea')
})