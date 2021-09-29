import * as React from 'react';

interface IProps {
  name: string,
}

interface IState {
  age: number,
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      age: 27,
    };
  }

  render() {
    const { name } = this.props;
    const { age } = this.state;
    return (
      <div>
        <h1>
          name:
          { name }
        </h1>
        <h1>
          age:
          { age }
        </h1>
      </div>
    );
  }
}
