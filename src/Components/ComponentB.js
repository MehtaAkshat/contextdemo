import React, { Component } from 'react'
import { UserConsumer } from './Context'


class ComponentB extends Component {

        render() {
            console.log(this.props.value);
        //    return <ComponentB value={this.props.value}/>
        


        return (
         <div>Hello {this.props.value} </div>
        )   
    }   
}


export default ComponentB
