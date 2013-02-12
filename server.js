var express = require('express'),
    sys = require('sys'),
    path = require('path');

var api = express();

api.configure(function() {
    api.set('port', 1337);
    api.set('api_version', 'v1');
});

api.get('/'+api.get('api_version')+'/api/:resource', function(req, res) {
    var resource = req.params.resource;

    try {
        var func = require('./routes/' + resource);
    } catch (e) {
        res.send({status:'1000', message:'Resource ' + resource + ' does not exist.'});
    }

    if (func) {
        func(req,res);
    }
});

api.listen(api.get('port'), function() {
    console.log('server running on 1337');
});
