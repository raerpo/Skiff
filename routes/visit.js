function index(req, res){
    res.render('index');
}

module.exports = function(app) {
    app.get('/', index);
}
