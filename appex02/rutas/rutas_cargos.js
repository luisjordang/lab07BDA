var mongojs = require('mongojs');
var uri     = 'mongodb://127.0.0.1:27017/Lab02' ;
var db      = mongojs(uri, ["Cargos"]);

function cargos_listado(req, res) {
    db.Cargos.find().sort({nombre:1}, function(err, records) {
        if (err) {
            console.log('Error al acceder a la base de datos.');
            return;
        }
        res.render('m_cargos_listado',{records : records});
    }); 
}

module.exports = {
    listado: function (req, res) {
        cargos_listado(req, res);
    },

    nuevo: function (req, res) {
        res.render('m_cargos_nuevo',{});
    },
}