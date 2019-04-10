import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
TODO
Management hasnt signed off on carousel yet, but I have a good feeling about it
*/
const slides = [
  {
    title: 'Julia Day',
    company: 'Juci Patties',
    quote:
      'Thanks Guys! Keep up the good work.Awesome Design that completely surpassed our expectations',
  },
]
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: props.slides || [],
      currentSlide: props.slides[0] || {},
      test: 'Hello Carousel',
    }
  }

  nextSlide = () => <div />
  previousSlide = () => <div />
  render() {
    return this.props.children(this.state)
  }
}

Carousel.propTypes = {
  children: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
}

export default Carousel
