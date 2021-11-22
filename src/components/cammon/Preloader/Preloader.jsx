import React from 'react';
import preloder from '../../../assets/images/preloader.gif'

let Preloder = ({style}) => {
    return(
        <img style={style} src={preloder} alt="preloder"/>
    )
}

export default Preloder;