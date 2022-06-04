let data = [ { item: 'Feed the dog' }, { item: 'Learn Node JS'}, { item: 'Go Shopping'}];

const bodyParser = require('body-parser');  // middleware
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

    //setting up routes
    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function(req, res) {  // http request
        data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);
    });
};