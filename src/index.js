import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header';
import Filters from './components/filters';
import Search from './components/search';
import Display from './components/display';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{image: 'images/displays/1.png', user: 'Zahidul', views: '5,710', comments: '46', likes: '527'},
      {image: 'images/displays/2.jpg', user: 'Orely', views: '3,689', comments: '10', likes: '412'},
      {image: 'images/displays/3.png', user: 'Radesign', views: '1,775', comments: '3', likes: '221'},
      {image: 'images/displays/4.png', user: 'B&B', views: '5,344', comments: '56', likes: '398'},
      {image: 'images/displays/5.png', user: 'Markus Magnusson', views: '10,636', comments: '89', likes: '667'},
    {image: 'images/displays/6.png', user: 'Zhenya Rynzhuk', views: '993', comments: '17', likes: '114'},
  {image: 'images/displays/7.png', user: 'Paperpillar', views: '8,409', comments: '167', likes: '558'},
{image: 'images/displays/8.png', user: 'UI8', views: '2,199', comments: '71', likes: '290'},
{image: 'images/displays/9.png', user: 'Artland', views: '5,344', comments: '56', likes: '398'},
{image: 'images/displays/10.png', user: 'Fireart Studio', views: '20,735', comments: '80', likes: '1,110'},
{image: 'images/displays/11.png', user: 'Flair Digital', views: '1,644', comments: '2', likes: '400'},
{image: 'images/displays/12.jpg', user: 'New Beee', views: '9,762', comments: '46', likes: '578'},
{image: 'images/displays/13.png', user: 'Unfold', views: '30,009', comments: '65', likes: '890'},
{image: 'images/displays/14.png', user: 'Netguru', views: '675', comments: '5', likes: '99'},
{image: 'images/displays/15.png', user: 'Invision', views: '1,005', comments: '2', likes: '214'},
{image: 'images/displays/16.jpg', user: 'Gal Shir', views: '6,890', comments: '15', likes: '316'},
],
      rendering: false
    }
  }

  search = () => {
    this.setState({
      rendering:true
    })

    setTimeout(function() {
    this.setState({rendering: false}) //After 1 second, set render to true
}.bind(this), 2000)
  }

  render() {
    return (
      <div>
      <Header/>
    <Search onSearch={this.search}/>
      <Filters/>
    <Display items={this.state.items} rendering={this.state.rendering}/>
  </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
