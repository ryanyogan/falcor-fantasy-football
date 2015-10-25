import React from 'react';
import model from '../model';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    // TODO:  Peace out to this, switch to Redux store for all model calls
    this.state = {
      players: {}
    }
  }

  componentWillMount() {
    this.retrieveGraph();
  }

  render() {
    const players = Object.keys(this.state.players).map((idx) => {
      return <li key={idx}>{this.state.players[idx].name}</li>;
    });

    return (
      <ul>{players}</ul>
    );
  }

  retrieveGraph() {
    model.getValue(['players', 'length'])
      .then(length => model.get(['players', {from: 0, to: length - 1}, 'name']))
      .then(response => this.setState({ players: response.json.players }));
  }
}
