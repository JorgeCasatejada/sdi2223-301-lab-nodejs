module.exports = function(app) {
    app.get('/authors/', function (req, res) {
        let authors = [{
            "name": "Diego García",
            "group": "Los Maleantes",
            "role": "cantante"
        }, {
            "name": "Enrique Hilanderas",
            "group": "Los Maleantes",
            "role": "pianista"
        }, {
            "name": "Alex Rodríguez",
            "group": "Los Maleantes",
            "role": "bateria"
        }, {
            "name": "Jorge Casatejada",
            "group": "Los Maleantes",
            "role": "bajista"
        }];

        let response = {
            authors: authors
        };
        res.render("authors/authors.twig", response);
    });
    app.get('/authors/add', function (req, res) {
        res.render("authors/add.twig");
    });
    app.post('/authors/add', function (req, res){
        let response = "";
        if (req.body.name !== null && typeof (req.body.name) != "undefined" && req.body.name.trim().length != 0)
            response = "Nombre: " + req.body.name + "<br>";
        else
            response = "Nombre no enviado a la petición" + "<br>";
        if (req.body.group !== null && typeof (req.body.group) != "undefined" && req.body.group.trim().length != 0)
            response += "Grupo: " + req.body.group + "<br>";
        else
            response += "Grupo no enviado a la petición" + "<br>";
        if (req.body.role !== null && typeof (req.body.role) != "undefined" && req.body.role.trim().length != 0)
            response += "Rol: " + req.body.role + "<br>";
        else
            response += "Rol no enviado a la petición" + "<br>";

        res.send(response);
    });
    app.get('/authors/*', function (req, res) {
        res.redirect('/authors');
    });
};