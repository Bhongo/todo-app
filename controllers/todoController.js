let data = [ { item: 'Feed the dog' }, { item: 'Learn Node JS'}, { item: 'Go Shopping'}];

module.exports = function(app){

    //setting up routes
    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res) {
      
    });

    app.delete('/todo', function(req, res) {  // http request
      
    });
};