import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      two: '2'
    }
  }


  render() {
    return (
      <div>
        <h1>Dance Break</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));