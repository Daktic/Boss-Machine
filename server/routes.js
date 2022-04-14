const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});


app.post('api/minions', (req, res, next) => {

    addToDatabase('minions', req.body);

    
})


minionRouter.use('api/minions', (req, res, next) => {
    const minionId = req.body.minionId;
    const minion = getFromDatabaseById('minions', minionId);
    if (minion) {
        next()
    } else {
        res.sendStatus(404);
    }
})

minionRouter.get('minionId', (req, res) => {
    res.status(200).send(minion);
})

minionRouter.put('minionId', (req, res) => {
    updateInstanceInDatabase('minions', minion);
    res.status(204).send(minion)
})

minionRouter.delete('minionId', (req, res) => {
    deleteFromDatabasebyId(minionId);
    res.sendStatus(202);
})