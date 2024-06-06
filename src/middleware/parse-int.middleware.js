module.exports = function (req, res, next) {
    const queryStrings = req.query;
    //myapi.com?pageNum=5
    //el 5 viaja como un string   { pageNum: '5' }

    for (const key in queryStrings) {
        const length = queryStrings[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
        //muchas veces pasaremos ID de mongoose, que casi siempre pasan de 20 carateres, por lo que excluimos esas opciones
        if (isValid) {
            queryStrings[key] = parseInt(queryStrings[key]);
        }
    }

    req.query = queryStrings;
    next();//da acceso al próximo middleware de la cola de request
}