import React, { PropTypes } from 'react';
import model from '../model';

export default class PlayerForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    let input = this.refs.input;

    model
      .call(['players', 'add'],
        [input.value],
        ['name'])
      .then(() => {
        input.value = '';
        input.focus();
        this.props.onAdded()
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref='input' />
        <button>Add Player</button>
      </form>
    );
  }
}

PlayerForm.propTypes = {
  onAdded: PropTypes.func.isRequired
}
