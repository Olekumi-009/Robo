import React, {Component} from 'react';
import CardList from '../component/CardList';
import Scroll from '../component/Scroll';
import SearchBox from '../component/SearchBox';
import '../css/App.css'
   
class App extends Component {
constructor(){
    super();
    this.state = {
        robots :[],
        searchfield : ""
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{ return response.json();
    })
    .then(users=>{ 
        this.setState({robots:users})})
    
}

onsearChange=(event)=>{
    this.setState({searchfield : event.target.value});
}
render(){
    const{robots ,searchfield } =this.state;
    const filteredRobots = this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
     })
     return (!robots.length)?
           ( 
           <div className='tc pa7'>
            <h1>loading...</h1>
            </div>
                        )             :
    (
     <div className='tc sans-serif'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onsearChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
    </div>  
        )
         }
    }
      
export default App;