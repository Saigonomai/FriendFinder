module.exports = function(app) {
    var friends = require('../data/friends.js');

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    });


}