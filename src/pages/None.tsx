import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

function None() {
    return (
        <div style={style}>
            <h1>Nada por aqui</h1>
            <Link to="/">Voltar</Link>
        </div>
    );
}

const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
};

export default None;
