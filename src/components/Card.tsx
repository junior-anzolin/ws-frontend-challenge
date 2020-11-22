import React from 'react';

import '../styles/components/card.scss';

const Card = (props: { children: any; title?: string }) => (
    <div className="card">
        <div className="card-header">
            <h3>{props.title}</h3>
        </div>
        <div className="card-content">{props.children}</div>
    </div>
);

export default Card;
