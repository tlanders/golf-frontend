import React from "react";
import {UncontrolledCarousel} from "reactstrap";

const carouselItems = [
    {
        src: '/images/home-hero.jpg',
        altText: 'Home Hero',
        key: '1'
    }
];

export const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            {/*<UncontrolledCarousel items={carouselItems}/>*/}
            <img src={'/images/home-hero.jpg'} className={'hero-image'}/>
        </div>

    );
}