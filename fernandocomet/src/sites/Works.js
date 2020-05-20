import React, { Component } from 'react';
import Card from './Card';
import './Works.css';


class Works extends Component{

    constructor(props){
        super(props);
        this.state = {
          data:[]
        }
      }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json')
          .then(response => response.json())
          .then(data => this.setState({ data }))
    }

  
    render(){
        return(
              <div className="card-list">
                  {this.state.data.map((item, idx) => (
                      <Card 
                      key={idx} 
                      image={item.pic}
                      title={item.title} 
                      hashtag={item.category}
                      description={item.description}
                      description2={item.description2}
                      thanksto={item.thanksto}
                      seemore={item.url}
                      />
                  ))}
              </div>     
        )
    }

}

export default Works;

/*
            titles:[],
          descriptions:[],
          descriptions2:[],
          thankstos:[],
          pics:[],
          urls:[],
          imagesdesktop:[],
          imagesmobile:[]

              <div className="main">
                  <Routes menu={this.props.menu} />
              </div>

              /*initialSet(){
        console.log('I really don´t need this!')
        let titleArr = [];
        let descriptionArr = [];
        let description2Arr = [];
        let thankstoArr = [];
        let picsArr = [];
        let urlsArr = [];
        let imagesdesktopArr = [];
        let imagesmobileArr = [];

        for (let i = 0; i < this.state.data.length ; i++){
          titleArr.push(this.state.data[i].title)
          descriptionArr.push(this.state.data[i].description)
          description2Arr.push(this.state.data[i].description2)
          thankstoArr.push(this.state.data[i].thanksto)
          picsArr.push(this.state.data[i].pic)
          urlsArr.push(this.state.data[i].url)
          imagesdesktopArr.push(this.state.data[i].imagedesktop)
          imagesmobileArr.push(this.state.data[i].imagemobile)
        }
        this.setState({
            titles: titleArr,
            descriptions: descriptionArr,
            descriptions2: description2Arr,
            thankstos: thankstoArr,
            pics: picsArr,
            urls: urlsArr,
            imagesdesktop: imagesdesktopArr,
            imagesmobile: imagesmobileArr
        })
        
            console.log(this.state.titles[0]);
            console.log(this.state.descriptions[0]);
            console.log(this.state.descriptions2[0]);
            console.log(this.state.thankstos[0]);
            console.log(this.state.pics[0]);
            console.log(this.state.urls[0]);
            console.log(this.state.imagesdesktop[0]);
            console.log(this.state.imagesmobile[0]);
        

           
      {
        "title": "Stock Photo Contributor",
        "description": "I´m selling at Shutterstock, GettyInages and DreamsTime.",
        "description2": "Landscape, Travel, Street, Nature, Models, Events. Using a EOS 5D Mark III and Samsung S9",
        "thanksto": "Thanks to models Andrea, Tere, Jara and Fermin, and Diego for the steel wool.",
        "icon": "fas fa-camera",
        "monster": "https://www.fernandocomet.com/img/monsters/monster22.svg",
        "pic": "https://www.fernandocomet.com/img/pics/camera.png",
        "unsplash": "https://source.unsplash.com/1600x900/?camera",
        "url": "https://www.shutterstock.com/g/fernandocomet",
        "imagedesktop": "https://www.fernandocomet.com/img/desktop/stockphoto.png",
        "imagemobile": "https://www.fernandocomet.com/img/mobile/stockphoto.png",
        "category": "photographer"
      },  

              //console.log(this.state.data);
        /* 
        I need Array Objects, for each:
            title
            description
            description2
            thanksto
            pic
            url
            imagedesktop
            imagemobile
            category

            introEnd = 
            <ul className="collection multiple-choice">
                  {this.state.countriesQuizz.map((item, idx) => (
                        <button disabled={this.state.quizzing} className="neutral" onClick={this.handleChange.bind(this, idx)} key={idx}>{item}</button>
                  ))}
            </ul>

             <div className="JokeList-jokes">
          {jokes.map((item, idx) => (
            <Joke
              key={item.id}
              item={item.joke}
              points={item.points}
              rankUp={() => this.handlePoints(item.id, 1)}
              rankDown={() => this.handlePoints(item.id, -1)}
            />
          ))}
        
*/
