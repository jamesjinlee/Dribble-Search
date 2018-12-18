import React, { Component }from 'react';
import { Dropdown, Menu, Button } from 'semantic-ui-react';

class Filters extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <div className="filters">
        <Dropdown placeholder='Sort' icon = 'angle down' pointing options={[
  { key: 1, text: 'Most Recent', value: 1 },
  { key: 2, text: 'Most Viewed', value: 2 },
  { key: 3, text: 'Most Commented', value: 3 },
  { key: 4, text: 'Most Liked', value: 4 }
]} />
<Dropdown placeholder='Categories' icon = 'angle down' pointing options={[
{ key: 1, text: 'All Categories', value: 1 },
{ key: 2, text: 'Photography', value: 2 },
{ key: 3, text: 'UX/UI', value: 3 },
{ key: 4, text: 'Illustration', value: 4 },
{ key: 5, text: 'Branding', value: 5 },
{ key: 6, text: 'Graphic Design', value: 6 },
{ key: 7, text: 'Animation', value: 7 },
{ key: 8, text: 'Drawing', value: 8 },
{ key: 9, text: 'Fine Arts', value: 9 },
{ key: 10, text: 'Web Design', value: 10 },
]} />

<Dropdown placeholder='Tools' icon = 'angle down' pointing options={[
{ key: 1, text: 'All Tools', value: 1 },
{ key: 2, text: 'Adobe Photoshop LightRoom', value: 2 },
{ key: 3, text: 'Adobe AfterEffects', value: 3 },
{ key: 4, text: 'Adobe InDesign', value: 4 },
{ key: 5, text: 'Adobe Photoshop', value: 5 },
{ key: 6, text: 'Adobe Illustrator', value: 6 },
]} />


<Dropdown placeholder='Type' icon = 'angle down' pointing options={[
{ key: 1, text: 'All Types', value: 1 },
{ key: 2, text: 'Shots', value: 2},
{ key: 3, text: 'Shots With Attachments', value: 3 },
{ key: 4, text: 'Team Shots', value: 4 },
{ key: 5, text: 'GIFs', value: 5 }
]} />

<Dropdown placeholder='Time' icon = 'angle down' pointing options={[
{ key: 1, text: 'This Past Week', value: 1 },
{ key: 2, text: 'This Past Month', value: 2 },
{ key: 3, text: 'This Past Year', value: 3 },
{ key: 4, text: 'All Time', value: 4 }
]} />

      </div>
    )
  }
}

export default Filters;
