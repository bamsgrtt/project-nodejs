const http =  require('http');

const requestListener = (request, response) => {
    response.setHeader('Contect-Type', 'application/json'); // Response Header
    response.setHeader('Powered-By', 'Node.js');
    response.statusCode = 200;
   
    // Method request
    const { method, url } = request;

    // Routing request
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage!</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1> Halaman tidak dapat di akses dengan ${method} request!</h1>`);
        }
    } else if (url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200; // Response status
            response.end(JSON.stringify({ // Response body
                message: 'Halo! ini adalah halaman about!'}));
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200; 
                response.end(JSON.stringify({
                    message: `Halo, ${name} ini adalah halaman about!`}));
            }); 
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat di akses dengan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};

    /** Kode komentar disembnyikan agar lebih ringkas */
    //if(method === 'GET') {
    //    console.log('<h1>Hello ini Get!</h1>');
    //}

    // Body request
    //if(method === 'POST') {
    //    let body = [];

    //    request.on('data', (chunk) => {
    //        body.push(chunk);
    //    });


    //    request.on('end', () => {
    //        body = Buffer.concat(body).toString();
    //        const { name } = JSON.parse(body);
    //        response.end(`<h1>Hai, ${name}!<h1>`);
    //    });
    //}


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});