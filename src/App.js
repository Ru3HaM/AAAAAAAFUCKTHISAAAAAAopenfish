import React, { Component } from 'react';
import MainMap from './components/MainMap/MainMap.jsx';
import Menu from './components/Menu/Menu.jsx';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

   constructor() {
    super();

    this.state = {
      appName: 'Fish Search', 
      fishList: [
      {
          name: 'okun',
          mediumWeight: 2.6,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 50,
          minDepth: 0.3,
          rare: false
        },
        {
          name: 'dsfghjk',
          mediumWeight: 2.6,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 50,
          minDepth: 0.3,
          rare: false
        },
        {
          name: 'ftghj',
          mediumWeight: 2.6,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 50,
          minDepth: 0.3,
          rare: false
        }
      ]
    }
  }


  render() {
    return (
      <>
        <Menu/>
                <Route exact path="/" component={MainMap}/>
                <Route path="/MainMap" component={MainMap}/>
                </>
    );
  }
}

export default App;
