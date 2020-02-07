{
    // Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query params: request.query (Filtro, paginação, ordenação) passados e visiveis por url (get)
// Route params: request.params (Identificar um recurso na alteração ou remoção) (put, delete)
// Body: request.body (Dados para criação ou alteração de um registro) (post, put)
}

const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController =  require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;