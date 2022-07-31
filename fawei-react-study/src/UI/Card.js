import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <section className={`${props.className} card`}>
            {props.children}
        </section>
    );
};

export default Card;