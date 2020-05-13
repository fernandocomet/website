import React, { Component } from 'react'

class Works extends Component{

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
          console.log(this.state.data[i].title);
        }
        this.setState({
          works: worksArr
        })
        //console.log(this.state.data);
        /* 
        I need Array Objects, for each:
            title
            description
            description2
            thanksto
            pic
            unsplash
            url
            imagedesktop
            imagemobile
            category
        */
    }

    render(){
        return(
            <h1>This is Works</h1>
        )
    }

}

export default Works;