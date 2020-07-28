import React from 'react';

function ButtonLink(props){

    //props => { "className": "Valor passado por paramentro", "href" : "outro valor"}
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;