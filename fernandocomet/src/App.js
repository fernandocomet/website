import React, { Component } from 'react';
// import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';
import Routes from './navigation/Routes';
import { Route, NavLink, Switch } from 'react-router-dom';
import home from "./img/navbar/white_home.svg";
import text from "./img/navbar/white_text.svg";
import works from "./img/navbar/white_works.svg";
import json from "./img/navbar/white_json.svg";
import unsplash from "./img/navbar/white_unsplash.svg";
import monster from "./img/navbar/white_monster.svg";
import icon from "./img/navbar/white_icon.svg";


class App extends Component{  

  /*Single Source of truth
  https://github.com/fernandocomet/website/blob/master/fernandocomet/src/data/portfolio.json
  https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json
  */

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

  /*
  constructor(props){
    super(props);
    this.state = {
      data:[],
      works:[]
    }
    this.initialSet = this.initialSet.bind(this);
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .then(this.initialSet)
  }

  initialSet(){
    let worksArr = [];
    for (let i = 0; i < this.state.data.length ; i++){
      worksArr.push(this.state.data[i].title)
    }
    this.setState({
      works: worksArr
    })
    console.log(works)
    /* 
    I need Array Objects, for each:
        title
        description
        description2
        thanksto
        icon
        monster
        pic
        unsplash
        url
        imagedesktop
        imagemobile
        category
    /
  }*/

  render(){

    //const [nameState, setNameState] = useState('Adam');

    return (
        <div className="container">
            <div className="navbar">
              <Navbar menu={this.props.menu} />
            </div>  
            <div className="main">
                <Routes menu={this.props.menu} />
            </div>
            <div className="footer">
              <Footer menu={this.props.social} />
            </div>
        </div>
    );
  }

}

export default App;
