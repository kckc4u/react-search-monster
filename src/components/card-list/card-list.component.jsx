import React from 'react';

import Card from '../card/card.component.jsx';

import './card-list.style.css';

export const CardList = props => {
    
    return (
        <div className="card-list"> {props.mosters.map(mnst => <Card {...mnst} key={mnst.id}/>)} </div>
    );
}