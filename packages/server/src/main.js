import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((request, response) => {
    switch(request.url){
        case '/status': {
            response.writeHead(200, {
                'Content-type': 'application/json'
            });
            response.write(JSON.stringify({
                status: 'okay',
            }    
            ));
            response.end();
            break;
        }
        

        case '/authenticate': {
            let data = "";
            request.on('data', (chunck) => {
                data += chunck;
            });
            request.on('end', () => {
                const status = parse(data)
                response.end();
            })
            break;
        }

        default: {
            response.writeHead(404, 'Service not found');
            response.end();
        }
    }
})

// configurar porta e hostname
// caso há mais de uma palicação

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`;

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listining at ${HOSTNAME}:${PORT}`)
})