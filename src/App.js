import React, { Component } from 'react';
import CardList from './CardList.js'
import {robots} from './robots.js'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            seachfield: ''
        }
    }

    onSeachChange = (event) => {
        this.setState({ seachfield :event.target.value})
        
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=> this.setState({robots: users}));
        
    }


    render() {
    const filteredRobot = this.state.robots.filter(robot =>{
         return robot.name.toLowerCase().includes(this.state.seachfield.toLowerCase());
    })

        return (
            <div className = 'tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange = {this.onSeachChange}/>
            <Scroll>
                <CardList robots={filteredRobot}/>
            </Scroll>
            </div>
        )
     }
}

export default App;