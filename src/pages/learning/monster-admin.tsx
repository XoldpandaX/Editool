import { PureComponent } from 'react';

export class MonsterAdmin extends PureComponent<{ name: string; role: 'admin' }> {
  componentDidMount(): void {
    console.info('COMPONENT DID MOUNT', this.props.name);
  }

  componentDidUpdate(prevProps: { name: string }): void {
    console.info('COMPONENT DID UPDATE', prevProps.name, '->', this.props.name);
  }

  componentWillUnmount() {
    console.info('COMPONENT WILL UNMOUNT', this.props.name);
  }

  render() {
    return (
      <h1>
        {this.props.name} with role {this.props.role}
      </h1>
    );
  }
}
