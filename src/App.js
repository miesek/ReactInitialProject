import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (propsx) => {
    // render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{propsx.title}</h1>
          <h2 className="App-name">{propsx.name}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  // }
};
// class App extends Component {
//     constructor(props) {
//         super();
//         this.title = props.title;
//     }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">{this.title}</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
