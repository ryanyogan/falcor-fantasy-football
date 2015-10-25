import FalcorServer from 'falcor-express';
import bodyParser from 'body-parser';
import express from 'express';
import Router from 'falcor-router';

const app = express();

const initialData = {
  players: [
    { name: 'Payton Manning' },
    { name: 'Eli Manning' },
    { name: 'Marshawn Lynch', alias: 'Beast Mode' }
  ]
};

const router = new Router([
  {
    route: 'players[{integers:playerIndexes}]["name"]',
    get: (pathSet) => {
      return pathSet.playerIndexes.map((playerIndex) => {
        if (initialData.players.length > playerIndex) {
          return [].prototype.apply.push({
            path: ['players', playerIndex, 'name'],
            value: initialData.players[playerIndex].name
          });
        }
      });
    }
  }, {
    route: 'players.length',
    get: () => {
      return { path: ['players', 'length'], value: initialData.players.length }
    }
  }, {
    route: 'players.add',
    call: (callPath, args) => {
      const newName = args[0];
      initialData.players.concat({ name: newName });
      return [
        {
          path: ['players', initialData.players.length - 1, 'name'],
          value: newName
        }, {
          path: ['players', 'length'],
          value: initialData.players.length
        }
      ];
    }
  }
]);

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/model.json', FalcorServer.dataSourceRoute(() => router ));
app.use(express.static(__dirname + '/'));
app.listen(9090, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Please navigate to http://localhost:9090');
});
