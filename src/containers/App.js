import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {// tambahan = dan => supaya this merujuk ke component App bukan ke input
        this.setState({ searchfield: event.target.value });
    }

    render(){// setiap ada perubahan maka akan dirender ulang
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield);
        });// membuat array baru yang properti name pada setiap elemennya mengandung string dari value input

        return !robots.length ? <h1 className='tc'>Loading</h1>:
                (
                    <div className='tc'>
                        <ErrorBoundary>
                            <h1 className='f1'>RoboFriends</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Scroll>
                                <CardList robots={filteredRobots} />
                            </Scroll>
                        </ErrorBoundary>
                    </div>
                );
    };
}

export default App;
