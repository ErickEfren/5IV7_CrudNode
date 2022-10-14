const express = require('express');
const router = express.Router(); 
const con = require('./db/db'); 
router.get('/', (req, res)=>{
    con.query('select * from alumnos',(error, results)=>{
        if(error){throw error}
        else{res.render('index', {results:results})}
    })
}); 
router.get('/create', (req, res)=>{
    res.render('create.ejs')
});
router.get('/edit/:bol', (req, res)=>{
    const bol = req.params.bol; 
    con.query('select * from alumnos where bol =?',[bol],(error, results)=>{
        if(error){throw error}
        else{res.render('edit', {user:results[0]})} 
    })
});
router.get('/delete/:bol', (req, res)=>{
    const bol = req.params.bol; 
    con.query('delete from alumnos where bol = ?', [bol], (error, results)=>{
        if(error){throw error}
        else{res.redirect('/')} 
    })
});
const crud = require('./controllers/crud');
router.post('/save', crud.save); 
router.post('/update', crud.update);
module.exports = router;