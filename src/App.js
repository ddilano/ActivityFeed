import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'You',
      prospect: 'Milton Romaguera',
      action: ['meeting', 'call', 'coffee', 'note', 'message'],
      feed: [],
      activityInput: ''
    }
  }
 

  newFeed=()=>{
    const oldFeed = [...this.state.feed];
    oldFeed.unshift(this.state.activityInput)
    this.setState( state => {
        return {
          feed: oldFeed,
          activityInput: ''
        }
        
    })
    console.log('activityInput', this.state.activityInput);
    console.log('feed', this.state.feed);
  }

  onInputChange = (e) => {
    this.setState({
      activityInput: e.target.value
    })
  }

  render() {
    const {prospect, feed} = this.state;
    console.log('this.state in render', this.state);
    return (
      <div>
        <input className='input-field' type='text' placeholder={`add a note about ${prospect}`} onChange={this.onInputChange} value={this.state.activityInput}/>
        <button type='submit' onClick={this.newFeed}>Submit</button>
        <ul>
          {feed.map((i, index) => <li key={index}>{i}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;
