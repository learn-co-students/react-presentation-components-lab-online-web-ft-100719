import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleOnClick = () => {
    alert("From Simpler Component")
  }

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleOnClick} />
  </div>,
  document.getElementById('root')
);

