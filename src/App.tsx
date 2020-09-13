import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Nav } from './components/Nav/Nav';

const App = () => (
  <div
  
     style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
  
  >
    <Nav />
    <main
      className='container'
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gap: '1rem',
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
      }}
    >
      <h1> Typescript 💖 React </h1>
      <h3>Now, you don't have to go slow anymore. Happy hacking!</h3>
    </main>
    <footer>
      <ul style={{
        background: 'black',
        padding: '1rem',
        justifyContent: 'center'
      }}>
        <li><a style={{color: 'white'}} href="https://reactjs.org/docs/hello-world.html">React Guide</a></li>
        <li><a style={{color: 'white'}} href="https://basarat.gitbook.io/typescript/getting-started">Typescript Online book</a></li>
        <li><a style={{color: 'white'}} href="https://swc-project.github.io/docs/usage-swc-loader">Swc-loader config doc</a></li>
      </ul>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
