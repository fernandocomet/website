import React, { Component } from 'react';
import './App.css';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';
import Routes from './navigation/Routes';
import { Route, NavLink, Switch } from 'react-router-dom';
import home from "./img/navbar/home.svg";
import text from "./img/navbar/text.svg";
import works from "./img/navbar/works.svg";
import json from "./img/navbar/json.svg";
import unsplash from "./img/navbar/unsplash.svg";
import monster from "./img/navbar/monster.svg";
import icon from "./img/navbar/icon.svg";


class App extends Component{  

  static defaultProps={
    menu:[
      {name: "", icon: "home.svg", src: home}, //home
      {name: "text", icon: "text.svg", src: text},
      {name: "works", icon: "works.svg", src: works},
      {name: "json", icon: "text.svg", src: json},
      {name: "unsplash", icon: "text.svg", src: unsplash},
      {name: "monster", icon: "text.svg", src: monster},
      {name: "icon", icon: "text.svg", src: icon}
    ]

  }

  render(){
    return (
      <div className="App">
        <Navbar menu={this.props.menu} />
        <div className="container">
          <Routes menu={this.props.menu} />
        </div>
        <Footer menu={this.props.social} />
      </div>
    );
  }

}

export default App;
