import React, { Suspense } from "react";
import Preloder from "../components/cammon/Preloader/Preloader";

export let withSuspense = (Component) => {

  return (props) => {
    return <Suspense fallback={<Preloder/>}><Component {...props}/></Suspense>;
  } 
};
