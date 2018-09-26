const GD = require('../GDStuff/GD');
const GDClient = new GD();

module.exports = function(app, db) {
    app.post('/level', (req, res) => {
      console.log(req.body.str)

      GDClient.levels(req.body.str, req.body.diff, req.body.len, req.body.page, req.body.total, req.body.uncompleted, req.body.completed, req.body.featured, req.body.original, req.body.twoPlayer, req.body.coins, req.body.epic, req.body.star).then(lvl => {
        res.json(lvl)
      })

    });
  };
