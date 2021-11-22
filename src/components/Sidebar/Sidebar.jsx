import React from "react";
import s from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    let SidebarElements = props.state.map(el => <SidebarItem url={el.url} alt={el.alt} name={el.name}/>)
  return(
<div className={s.images}>
    {SidebarElements}
</div>
  )
};

export default Sidebar;
