'use strict';

const http = require('http'),
    port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(filtro(req));
});

function filtro(req) {

    switch (req.method) {
        case 'GET':
            return get(req.url) + getParImpar(req.url);
            break;

        case 'POST':
            return post(req.url) + getParImpar(req.url);;
            break;

        case 'PUT':
            return put(req.url) + getParImpar(req.url);;
            break;

        case 'DELETE':
            return del(req.url) + getParImpar(req.url);;
            break;
        default:
            return req.url + " " + req.method
    }
}

function getParImpar(uri) {
    let array = [];
    for (var i = 0; i < uri.length; i++) {
        if (i % 2 == 0) {
            array.push('_par_')
        } else {
            array.push('_impar_')
        }
    }
    return array
}

function get(url) {
    return "A url " + url + " foi chamada como GET"
}

function post(url) {
    return "A url " + url + " foi chamada como POST"
}

function put(url) {
    return "A url " + url + " foi chamada como PUT"
}

function del(url) {
    return "A url " + url + " foi chamada como DELETE"
}

server.listen(port, () => {
    console.log(`Server running`);
});
