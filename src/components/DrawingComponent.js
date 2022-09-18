import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import beach from '../assets/images/beachfamily.jpg'

import family from '../assets/images/family.jpg'
import father from '../assets/images/father.jpg'
import girl from '../assets/images/girl.jpg'
import hands from '../assets/images/handsphoto.jpg'



const items = [
    {
        src: beach,
        altText: 'Slide 1',
        caption: '',

    },

    {
        src: family,
        altText: 'Slide 3',
        caption: '',

    },
    {
      src: father,
      altText: 'Slide 4',
      caption: '',

  },
  {
    src: girl,
    altText: 'Slide 5',
    caption: '',

},
{
  src: hands,
  altText: 'Slide 6',
  caption: '',
}

];


class DrawingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null,
            activeIndex: 0

        };
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
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
          <Carousel variant ="dark"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl variant = "dark" direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
      }
    }

export default DrawingComponent;