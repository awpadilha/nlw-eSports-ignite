import express, { response }  from 'express';
import {PrismaClient} from '@prisma/client' 

const app = express();
const prisma = new PrismaClient()

// HTTP methjods / API RESTful

app.get('/games', (request, respose) => {
    return response.json([]);
});

app.post('/ads', (request, respose) => {
    return response.json([201]);
});

app.get('/games/:id/ads', (request, response) => {

    // const gameId = request.params.id


    return response.json([
        {id: 1, name : 'Anuncio 1'},
        {id: 2, name : 'Anuncio 2'},
        {id: 3, name : 'Anuncio 3'},
        {id: 4, name : 'Anuncio 4'},
        {id: 5, name : 'Anuncio 5'},
    ])
})

app.get('/ads/:id/discord', (request, response) => {

    // const adId = request.params.id

    return response.json([])
})

app.listen(3333)