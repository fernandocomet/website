import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

    render(){
        return(
            <div className="card">
                <header className="card-header">
                    <img src={this.props.image} alt={this.props.title} className="card-header" />
                </header>
                <div className="card-body">
                    <p className="date">{this.props.hashtag}</p>
                    <h2>{this.props.title}</h2>
                    <p className="body-content">{this.props.description}<br></br>
                    {this.props.description2}</p>
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>    
                </div>                
            </div>
        )
    }

}

export default Card;


/*
                    <Card 
                    key={item.id} 
                    image={item.pic}
                    title={item.title} 
                    hashtag={item.category}
                    description={item.description}
                    description2={item.description2}
                    thanksto={item.thanksto}
                    seemore={item.url}
                    />


            <div className="card">
                <header className="card-header">
                    <img src='https://source.unsplash.com/user/erondu/600x400' alt='whatever' className="card-header" />
                </header>
                <div className="card-body">
                    <p className="date">Hashtag</p>
                    <h2>Título</h2>
                    <p className="body-content">lorem impsum dolor isis image yoquese me la pica un pollo latino cuando voy a Columbus<br></br>
                    Donec a neque hendrerit, dignissim metus vel, feugiat arcu. Vivamus aliquet hendrerit congue.</p>
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>    
                </div>                
            </div>
*/