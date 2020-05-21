import React, { Component } from 'react';
import './Text.css';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

class Text extends Component{
  //_isMounted = false;
    
    static defaultProps={
        colors:[
            {dark:"#F03F35",light:"#B6E3E4"},{dark:"#EF3D4A",light:"#96CBD1"},{dark:"#015397",light:"#FD4344"},{dark:"#D83530",light:"#0BBCD6"},{dark:"#1B1D1C",light:"#EA1821"},{dark:"#28292B",light:"#FF0046"},{dark:"#FF4552",light:"#EFE8D8"},{dark:"#FD667C",light:"#CFD1DD"},{dark:"#19227D",light:"#F1C2B8"},{dark:"#162BF4",light:"#EEC0DB"},{dark:"#2D1FE8",light:"#BEA1A5"},{dark:"#16C37B",light:"#F4F4F4"},{dark:"#0E39B1",light:"#FFFFFF"},{dark:"#1B1D1C",light:"#A6CFE2"},{dark:"#371722",light:"#BBAB9B"},{dark:"#008E8F",light:"#C7C6C4"},{dark:"#CF2F88",light:"#DABAAF"},{dark:"#C02A1A",light:"#B6CABF"},{dark:"#B32B48",light:"#C5BEAA"},{dark:"#D31B33",light:"#FDF06E"},{dark:"#D13642",light:"#FDEDB2"},{dark:"#2A3571",light:"#1EC3BD"},{dark:"#181A27",light:"#E88565"},{dark:"#018FD3",light:"#F4C7EE"},{dark:"#1B1D1C",light:"#77EEDF"},{dark:"#1EC8A9",light:"#FFEFE5"},{dark:"#28292B",light:"#B1FDEA"},{dark:"#28292B",light:"#E57066"},{dark:"#28292B",light:"#EED974"},{dark:"#0A64C0",light:"#FBFE55"},{dark:"#168E96",light:"#FDE2C8"},{dark:"#21AD65",light:"#FEC8BE"},{dark:"#E44A66",light:"#D3E8E1"},{dark:"#4F3A4B",light:"#E75151"},{dark:"#112378",light:"#FBECCF"},{dark:"#01B28B",light:"#F5CCCF"},{dark:"#1B1D1C",light:"#9257A9"},{dark:"#FF5034",light:"#C6D7C7"},{dark:"#481B19",light:"#F02F3B"},{dark:"#169BA3",light:"#FFFDE7"},{dark:"#1539CF",light:"#F1D3D3"},{dark:"#FF2B93",light:"#7CE0E6"},{dark:"#3B755F",light:"#F2CB6C"},{dark:"#D36479",light:"#85CEBA"},{dark:"#481B19",light:"#9B8FFF"},{dark:"#0D3934",light:"#FFC5D6"},{dark:"#062AFA",light:"#BBFFBA"},{dark:"#5E30CF",light:"#99FFD0"},{dark:"#1A0BCA",light:"#FB9B2A"},{dark:"#F6748D",light:"#E5E8DC"},{dark:"#073EA7",light:"#90FFE4"},{dark:"#643387",light:"#F3735C"},{dark:"#009BC6",light:"#FFD15E"},{dark:"#202448",light:"#A48641"},{dark:"#181E46",light:"#D17C78"},{dark:"#0A506B",light:"#FEBA02"},{dark:"#0E2F56",light:"#FC3B2D"},{dark:"#6136BA",light:"#00FFC3"},{dark:"#54120A",light:"#EF5B0B"},{dark:"#DE10DE",light:"#FFD100"},{dark:"#32145D",light:"#FF8C8B"},{dark:"#1429C7",light:"#FF4D06"},{dark:"#1405FF",light:"#CDFF05"},{dark:"#1E3B34",light:"#FEBC00"},{dark:"#1E3B34",light:"#E10000"},{dark:"#112378",light:"#F64A00"},{dark:"#2C159D",light:"#C39D63"},{dark:"#8C23FF",light:"#00FDFF"},{dark:"#B03297",light:"#95D0FF"},{dark:"#44266D",light:"#14E1E3"},{dark:"#1E3B34",light:"#FF6B61"},{dark:"#502F7E",light:"#EDB200"},{dark:"#CD244A",light:"#EAC417"},{dark:"#6136BA",light:"#DABAAF"},{dark:"#1B1D1C",light:"#F1B908"},{dark:"#E5270E",light:"#7EBDC1"},{dark:"#F31354",light:"#12E2BA"},{dark:"#266691",light:"#FD6749"},{dark:"#B8237E",light:"#6DA1AE"},{dark:"#CC2E22",light:"#FFB812"},{dark:"#6614C8",light:"#DFDC02"},{dark:"#28292B",light:"#A646A7"},{dark:"#586C74",light:"#D2DB00"},{dark:"#6614C8",light:"#F25A10"},{dark:"#1E3B34",light:"#FF8C8B"},{dark:"#FF5100",light:"#B3E129"},{dark:"#821E74",light:"#FF8C8B"},{dark:"#7912D9",light:"#E289DE"},{dark:"#C43253",light:"#D3B738"},{dark:"#F7CE17",light:"#2B64A9"},{dark:"#FC6C11",light:"#1E3B34"},{dark:"#F7CE17",light:"#B8237E"}
        ], 
        messages:[
            {
              "title": "Google Earth Game",
              "description": "A Google Earth Game using React, JSON and MaterializeCSS.",
              "description2": "Wanted to do something related to aerial photos and interactive",
              "thanksto": "Thanks Stackoverflow, Discordapp, Spectrum an Slack communities for always help"
            },
            {
              "title": "Froggyfer",
              "description": "A Canvas OOP Javascript game.",
              "description2": "A retrospective of the legendary arcade game of the 80s developed by Sega",
              "thanksto": "Thanks to Fran Naranjo for his patience, dedication and support"
            },
            {
              "title": "Runeando",
              "description": "A web App to share running routes in the city.",
              "description2": "We made a team of runners and ended up with a runner web app.",
              "thanksto": "Thanks to Alvaro Monasterio, working with you is easy and inspirational"
            },
            {
              "title": "Portfolio Website",
              "description": "A JSON React web App. Actually this is what you are seeing now ;D.",
              "description2": "Currently this is the project where you the User are ;D",
              "thanksto": "Thanks Gabriel Guerrero, aka Kolision Studio for the logo (my logo!), looks nice! You will have eternal beers for this."
            },      
            {
              "title": "Cerebriti App Case Study",
              "description": "Working as a UX Designer making an educational Tablet App.",
              "description2": "A challenge into the complicated world of education.",
              "thanksto": "Thanks Mist & Joseba, see you on travel!"
            },   
            {
              "title": "Runway App for runners",
              "description": "A whole UX Research for a runners´ App.",
              "description2": "I really like doing this type of work.",
              "thanksto": "Thanks to mentors Oscar Sántos-Pérez and Samuel Hermoso from Elastic Heads."
            },  
            {
              "title": "Clandestinos, web app for beer distributors",
              "description": "A Craft Beer UX Case Study.",
              "description2": "Best research ever at bars and pubs!",
              "thanksto": "Thanks Kevin Glidden for introducing me in the magnificent world of Craft Beer."
            },  
            {
              "title": "Running Apps UX Research",
              "description": "This is a UX Research I made about Running Apps.",
              "description2": "So I downloaded about 20 running Apps and tried all of them.", 
              "thanksto": "Thanks to boys from Strava, Runkeeper, NRC and MapMyRun."
            },  
            {
              "title": "UX Canvas Compilation",
              "description": "A collection of best UX Canvas boards to use in your own projects.",
              "description2": "Whatever",
              "thanksto": "Thanks Kevin Glidden for introducing me in the magnificent world of Craft Beer."
            },  
            {
              "title": "The Player Persona template",
              "description": "User Persona template for gamification projects.",
              "description2": "I remember every people going crazy with gamification, just trends...",
              "thanksto": "Thanks to Interaction Design Foundation articles about the topic."
            },  
            {
              "title": "Design Sprint as facilitator",
              "description": "Best recommendations and resources from experts to run a Design Sprint as facilitator.",
              "description2": "I think they are about to launch mini-mini-sprint, it lasts three hours!",
              "thanksto": "Mr. Jake Knapp, nice book!"
            },  
            {
              "title": "My UX resource list",
              "description": "Compilation of best tools and resources for UX.",
              "description2": "Should I make a Github for all this?",
              "thanksto": "Almost 50% of the list I got them from Ironhack"
            },  
            {
              "title": "Voice User Interface Insights",
              "description": "Research and Insights for VUI from the big ones in this field.",
              "description2": "Listening to what these girls tell us (Siri, Alexa, Cortana, etc.",
              "thanksto": "Thanks to Prototypr, UXPlanet and PlanetaChatbot publishing my articles at Medium."
            },   
            {
              "title": "The Category Ideation Method",
              "description": "A method to focus your UX Research, an ideation exercise based on collaboration and topics.",
              "description2": "A way to group ideas by topics, categories or trends.",
              "thanksto": "Thanks to my fellow teachers at Ironhack: Olaia, Inés and Laura."
            },  
            {
              "title": "UX Ads and Google Chrome Ad Crackdown",
              "description": "A study on UX for Ads from the point of view of principal actors: NNGroup, iab and Coalition for better Ads.",
              "description2": "Yeah, after 15 years at online Advertising finally I am using and AdBlocker.",
              "thanksto": "Thanks to NNGroup for opening my eyes and get my out of the Matrix."
            },   
            {
              "title": "Trello Customer Journey Extension",
              "description": "A Google Chrome extension to make Customer Journeys at Trello.",
              "description2": "The Trello boys are doing a great job, I hope they don't screw it up in Altassian.",
              "thanksto": "Thanks to Blueprint for Trello from Michael Schofield for inspiration."
            },   
            {
              "title": "IFEMA FITUR Ad Case Study",
              "description": "Making off of the international FITUR campaign at Making Science for IFEMA.",
              "description2": "This is how to do 1000 Ads in record time.",
              "thanksto": "Thanks to Ani, Elsa, Raquel, María, Sara, Elena and all IFEMA team at Making Science."
            },     
            {
              "title": "UI Design Animation Process",
              "description": "A process building a simple animation from Scratch.",
              "description2": "I´ve been moving from Flash to GSAP, Framer, SVG, CSS, it´s just moving boxes!",
              "thanksto": "Thanks to all pupils from Ironhack PartTime UX 17/18 modeling here as cartoons."
            },   
            {
              "title": "UOC DCO Case Study",
              "description": "Building a DCO from Scratch.",
              "description2": "This is about CRO meeting Cookies while seeing Ads, all parsed with JSON.",
              "thanksto": "Thanks to boys from Weborama, Carat and UOC."
            },      
            {
              "title": "Awards",
              "description": "All these images were taken randomly at different places. Usually open spaces with big angles: street, beaches, architectonic sites, etc.",
              "description2": "Life is about pics, specially mine.",
              "thanksto": "Thanks to National Geographic, FWAPhoto, Berlin Eurostars and Canon for the awards."
            },     
            {
              "title": "Travel Photographer",
              "description": "Four days in London.",
              "description2": "Whatever",
              "thanksto": "Thanks to Adri, Lula, Lotte and Esperanza for their hospitality."
            },   
            {
              "title": "Stock Photo Contributor",
              "description": "I´m selling at Shutterstock, GettyInages and DreamsTime.",
              "description2": "Landscape, Travel, Street, Nature, Models, Events. Using a EOS 5D Mark III and Samsung S9",
              "thanksto": "Thanks to models Andrea, Tere, Jara and Fermin, and Diego for the steel wool."
            },  
            {
              "title": "Instagram profile",
              "description": "@fernandocomet is a traveller and searcher.",
              "description2": "Actually I´m moving to TikTok ;D",
              "thanksto": "Thanks to WorkshopExperience for teaching me how to shoot."
            },    
            {
              "title": "Personal Projects",
              "description": "Secret Life of a Photographer is an experimental series that shows everything a photographer does in just fifty square meters..",
              "description2": "Yeah, that pic is in da house! Should I have my hair long again!",
              "thanksto": "Thanks to Slitvana, the ucranian girl coming to clean my house from time to time."
            }       
        ]
    }

    constructor(props){
        super(props);
        this.state = {
          data:[],
          works:[],
          counter:0
        }
        this.initialSet = this.initialSet.bind(this);
        this.generateText = this.generateText.bind(this);
        this.changeText = this.changeText.bind(this);
      }

    async componentDidMount(){
      //this._isMounted = true;
      //way 1
      const response = await fetch(`https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json`);
      const json = await response.json();
      this.setState({ data: json });
      this.initialSet();

      //way 2
       /* fetch('https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json')
          .then(response => response.json())
          .then(data => this.setState({ data }))
          .then(this.initialSet)*/
    }

    initialSet(){
        
        let worksArr = [];
        for (let i = 0; i < this.state.data.length ; i++){
          worksArr.push(this.state.data[i].title)
          // console.log(this.state.data[i].title);
        }
        this.setState({
          works: worksArr
        })
        
        //Here we go
        var tl = gsap.timeline({ repeat: -1 });
        this.props.colors.forEach((color) => {
        tl.to("#message", { xPercent: -50, left: "50%", duration: 1, delay: 1 })
            .to("#bg", { backgroundColor: color.dark, duration: 1, delay: 3 })
            .to("#message", { color: color.light, duration: 2, delay: 0 })
            .add(this.generateText);
        });
    }

    generateText() {
        gsap.to("#message", { text: this.changeText(this.props.messages) });
    }

    changeText(arr) {
        console.log(this.state.counter);
        let counterChange = this.state.counter + 1;
        if (counterChange === 24) {
            counterChange = 0;
        }
        this.setState({ counter: counterChange })
        return this.props.messages[counterChange].title;
    }
    
    render(){
        return(
          <div id="bg">
            <h1 id="message">Fernando Comet</h1>
          </div>
        )
    }

}

export default Text;
