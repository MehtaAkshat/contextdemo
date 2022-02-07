import React, { Component } from 'react' 
import ComponentB from './ComponentB' 

class ComponentA extends Component {
    
    render() {
        console.log(this.props.value);
        return <ComponentB value={this.props.value}/>
    }
}

export default ComponentA