import React from 'react';

import './card.style.css';

const Card = props => {
    return (
        <div className="card-container" key={props.id}>
            <img alt={props.name} src={`https://robohash.org/${props.id}?set=set2&size=180x180`}/>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;