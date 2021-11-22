import React from 'react';
import s from './SidebarItem.module.css'

const SidebarItem = (props) => {

   
    return(
        <div className={s.images}>
            <img src={props.url} alt={props.alt}/>
            {props.name}
        </div>
    );
}

export default SidebarItem;