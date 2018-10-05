import React from 'react';

export const Header = props => {
    return (
        <header>
            <h1 className="top">
                {props.titulo}
            </h1>
        </header>
    )
}