import { Component } from 'react';
import { Monster as M } from './monster';
import { MonsterAdmin } from './monster-admin';

type Role = 'user' | 'admin';

type Monster = {
  id: string;
  name: string;
  role: Role;
};

type ExampleState = {
  monsters: Monster[];
};

export class Example extends Component<Record<string, never>, ExampleState> {
  state: ExampleState = {
    monsters: [
      { id: 'a', name: 'Linda', role: 'user' },
      { id: 'b', name: 'Frank', role: 'admin' },
      { id: 'c', name: 'Jacky', role: 'user' },
      { id: 'd', name: 'Anton', role: 'admin' },
      { id: 'e', name: 'Andrey', role: 'user' },
    ],
  };

  addMonster = () => {
    this.setState({
      monsters: [...this.state.monsters, { id: 'd', name: 'Denis', role: 'user' }],
    });
  };

  removeSecondEl = () => {
    this.setState({
      monsters: this.state.monsters.filter((monster, idx) => idx !== 1),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addMonster}>Add new monster</button>
        <button onClick={this.removeSecondEl}>Remove second el</button>
        {this.state.monsters.map(({ id, name, role }) =>
          role === 'admin' ? (
            <MonsterAdmin
              key={id}
              name={name}
              role={role}
            />
          ) : (
            <M
              key={id}
              name={name}
              role={role}
            />
          )
        )}
      </div>
    );
  }
}
