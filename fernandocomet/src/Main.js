import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import Router from './navigation/Router';

function Main() {
  const routeResult = useRoutes(Router);

  return (
    <div className="Main">
      <A href="/home">Home</A> 
      <br />
      <A href="/works">Works</A>
      <br />
      <A href="/text">Text</A>
      {routeResult}
    </div>
  );
}

//export default Main;
const rootElement = document.getElementById("root");
ReactDOM.render( <Main />, rootElement);

