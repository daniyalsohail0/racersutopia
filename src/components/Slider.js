import React from 'react'
import { Carousel, Card } from 'react-bootstrap'

const Slider = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-teal-400 text-5xl text-mono tracking-widest p-4'>Gallery</h1>
        <div className='w-7/8 md:w-3/4 rounded-lg p-4'>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="./cars/1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="./cars/2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./cars/3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="./cars/4.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="./cars/5.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./cars/6.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="./cars/7.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="./cars/8.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./cars/9.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./cars/10.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Slider