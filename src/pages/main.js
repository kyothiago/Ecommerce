import { createServer } from "http";
import { parse } from "querystring";
import buz from "./buz";
import express, { response } from 'express';

const server = express();

server.get('/status', (_, response) =>{
    response.send({
        status: 'Okay'
    });
});
server.post('/authenticate', express.json(), (request, response) => {
    console.log(
        'E-mail', request.body.email,
        'Senha' request.body.password,
    );
    response.send();
});
buz;