import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./carouselAnimals.css"

import DompteurPicture from '../../assets/images/Dompteur.jpg'
import CracheurPicture from '../../assets/images/Cracheur.jpg'
import TrapezistePicture from '../../assets/images/Trapezistes.jpg'
import Tigre from '../../assets/images/animals/tigre.jpg'
import Comodo from '../../assets/images/animals/Komodo.jpg'
import Gorille from '../../assets/images/animals/gorille.png'
import Macaque from '../../assets/images/animals/macaque.jpg'
import Elephant from '../../assets/images/animals/elephant.jpg'

// https://ibb.co/pbhHgd0
// https://ibb.co/qJ5v4Vx
const items = [
  {
    src: Tigre,
    altText: 'Tigrou',
    caption: 'Tigrou'
  },
  {
    src: Comodo,
    altText: 'Raeghar',
    caption: 'Raeghar'
  },
  {
    src: Gorille,
    altText: 'Kaaris',
    caption: 'Kaaris'
  },
  {
    src: Macaque,
    altText: 'MaréchialleMarion',
    caption: 'MaréchialleMarion'
  },
  {
    src: Elephant,
    altText: 'Dumbo',
    caption: 'Dumbo'
  }
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} className='TitleCarousel' />
        </CarouselItem>
      );
    });

    return (
        
      <Carousel className="myCarouselStyle"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      
    );
  }
}


export default MyCarousel;