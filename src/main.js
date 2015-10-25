import React from 'react';
import ReactDOM from 'react-dom';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

class PlayerManager extends React.Component {
  handleNameAdded() {
    this.refs.playersList.update()
  }

  render() {
    return (
      <div className='container'>
        <PlayerForm onAdded={this.handleNameAdded.bind(this)} />
        <PlayerList ref='playersList' />
      </div>
    );
  }
}

ReactDOM.render(
  <PlayerManager />,
  document.getElementById('app')
);
