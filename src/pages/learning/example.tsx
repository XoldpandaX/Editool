import { Component } from 'react';

type Monster = {
  name: string;
};

type ExampleState = {
  monsters: Monster[];
};

export class Example extends Component<Record<string, never>, ExampleState> {
  state = {
    monsters: [{ name: 'Linda' }, { name: 'Frank' }, { name: 'Jacky' }],
  };

  addMonster = () => {
    this.setState({
      monsters: [...this.state.monsters, { name: 'Denis' }],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addMonster}>Add new monster</button>
        {this.state.monsters.map(({ name }) => (
          <h1 key={name}>{name}</h1>
        ))}
      </div>
    );
  }
}
