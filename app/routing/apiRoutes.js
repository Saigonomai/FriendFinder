module.exports = function(app) {
    var friends = require('../data/friends.js');

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var scores = req.body.scores
        var compatVal = 100;
        var partner = {};
        for (let i = 0; i < friends.length; i++) {
            var compatSum = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                compatSum += Math.abs(friends[i].scores[j]-scores[j]);
            }
            if (compatSum < compatVal) {
                compatVal = compatSum;
                partner = friends[i];    
            }
        }

        res.json(partner);
    });


}