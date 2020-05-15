import React from 'react';
import NavBar from './components/nav';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container" style={{marginTop: '1.25rem'}}>
        <div className="row">
          <div className="col-sm">
            <Counters />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
