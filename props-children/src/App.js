import React, { Component } from 'react';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading 01">
          Demo Props Children
        </Accordion>
      </div>
    )
  }
}

export default App;
