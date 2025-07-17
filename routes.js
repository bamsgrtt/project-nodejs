const routes = [
   {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tesebut';
        },
   },
   {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
   }, 
   {    
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
   }    ,
   {    
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tesebut';
        },
   }    ,
   {    
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params; // Path parameters
            const { lang } = request.query; // Query parameters

            if (lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;

        }
   },
   {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    // Payload request
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    }
];

module.exports= routes;