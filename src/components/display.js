import React, { Component }from 'react';
import {Card, Icon, Image, Loader, Dimmer, Segment, Transition} from 'semantic-ui-react';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


class Display extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let cardItems

    if (this.props.rendering) {
      cardItems = (<Loader active/>)
    } else {
      const shuffledCards = shuffleArray(this.props.items);
      const cards = shuffledCards.map((item) => {
      return (
        <Card key={item.user}>
        <Image src={item.image}/>
        <Card.Content>
        <Card.Header>{item.user}</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <a className="cardIcons">
        <Icon name='eye' />
      <span>{item.views}</span>
        <Icon name='comment' />
      <span>{item.comments}</span>
        <Icon name='like' />
      <span className='cardIconsLast'>{item.likes}</span>
      </a>
      </Card.Content>
        </Card>
      )
    });
    cardItems = (<Card.Group stackable={true} itemsPerRow={4}>{cards}</Card.Group>)
  }
    return (
      <div className="display">
        <div className="itemCards">
          {cardItems}
</div>

      </div>
    )
  }
}

export default Display;
