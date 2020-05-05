import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import linkedin from "../img/social/linkedin.svg";
import github from "../img/social/github.svg";
import medium from "../img/social/medium.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";
import devto from "../img/social/dev-dot-to.svg";
import pinterest from "../img/social/pinterest.svg";

//TODO: Reset Styles, Flexbox , DarkMode?


class Social extends Component{

    static defaultProps={       
        social:[
          {name: "Github", src: github, url:"https://github.com/fernandocomet"},
          {name: "Medium", src: medium, url:"https://medium.com/@fernandocomet"},
          {name: "Linkedin", src: linkedin, url:"https://www.linkedin.com/in/fernandocomet/"},
          {name: "Twitter", src: twitter, url:"https://twitter.com/fernandocomet"},
          {name: "DevTo", src: devto, url:"https://dev.to/fernandocomet"},
          {name: "Instagram", src: instagram, url:"https://www.instagram.com/fernandocomet/"},
          {name: "Pinterest", src: pinterest, url:"https://www.pinterest.es/fernandocomet/"}
        ]
      }

    render(){
        const socialLinks = this.props.social.map(item => (
            <li key={item.name}>
                <ExternalLink href={item.url}>
                        <img src={item.src} alt={item.name} width='24px'/>
                        {/* <span> {item.name} </span> */}
                </ExternalLink>
            </li>
        ))

        return(
            <div>
                <h1>This is social</h1>
                <ul>
                    {socialLinks}
                </ul>
                
            </div>
        )
    }
}

export default Social;
