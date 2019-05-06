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
          name: 'Окунь',
          mediumWeight: 2.6,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 50,
          minDepth: 0.3,
          rare: false,
          img: 'http://fishstocking.ru/img/okun_big.png'
        },
        {
          name: 'Щука',
          mediumWeight: 3.5,
          mediumLenght: 105,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 1,
          minDepth: 0.5,
          rare: false,
          img:'http://karasnedremi.com/wp-content/uploads/2013/03/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%8F-%D1%89%D1%83%D0%BA%D0%B0.png'
        },
        {
          name: 'Язь',
          mediumWeight: 2.5,
          mediumLenght: 35-53,
          hunter: true,
          lakes: true,
          river: true,
          rare: false,
          img:'http://spinning-club.ru/wp-content/uploads/2019/02/yaz.png'
        },
        {
          name: 'Карп',
          mediumWeight: 10,
          mediumLenght: 36.5,
          hunter: true,
          lakes: true,
          river: true,
          rare: false,
          img: 'http://uvarovskoe.ru/wp-content/uploads/2016/10/karp.png'
        },
        {
          name: 'Судак',
          mediumWeight: 12.5,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 5,
          minDepth: 2,
          rare: false, 
          img: 'http://forum.fisher61.ru/encryba/Sudak2.png'
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
