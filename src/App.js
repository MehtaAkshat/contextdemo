import React, { Component } from 'react' 
import "./App.css"
import ComponentA from './Components/ComponentA'
import { UserProvider } from './Components/Context';

class App extends Component {
  render() {
    return (
      <div>
        <ComponentA  value="hii"/>
      </div>
    )
  }
}
export default App;
