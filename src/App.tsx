import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Nav } from './components/Nav/Nav';

const App = () => (
  <div>
    <Nav />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
