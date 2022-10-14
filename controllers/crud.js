const con = require('../db/db');
exports.save = (req,res) => {
    const bol = req.body.bol;
    const nom = req.body.nom;
    const appat = req.body.appat;
    const apmat = req.body.apmat;
    const tel = req.body.tel;
    con.query('insert into alumnos set ?', {bol:bol, nom:nom, appat:appat, apmat:apmat, tel:tel}, (error, result) =>{
        if(error){console.log(error)}
        else{res.redirect('/')}
    })
}
exports.update = (req,res) => {
    const bol = req.body.bol;
    const nom = req.body.nom;
    const appat = req.body.appat;
    const apmat = req.body.apmat;
    const tel = req.body.tel;
    con.query('update alumnos set ? where bol = ?', [{nom:nom, appat:appat, apmat:apmat, tel:tel}, bol], (error, result) =>{
        if(error){console.log(error)}
        else{res.redirect('/')}
    })
}
