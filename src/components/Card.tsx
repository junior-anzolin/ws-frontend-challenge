import React from 'react';
import { IoMdInformationCircle } from 'react-icons/io';

import '../styles/components/card.scss';

const Card = (props: {
    children: any;
    title?: string;
    showBtnInfo?: boolean;
}) => (
    <div className="card">
        <div className="card-header">
            <h5>{props.title}</h5>
            {props.showBtnInfo && (
                <IoMdInformationCircle className="information-btn" />
            )}
        </div>
        {props.children}
    </div>
);

export default Card;
