import React, { Component } from 'react'
import{ Switch, Route } from 'react-router-dom';
// import{ Switch, Route, Redirect } from 'react-router-dom';
import Home from '../sites/Home';
import Text from '../sites/Text';
import Works from '../sites/Works';
import Json from '../sites/Json';
import Unsplash from '../sites/Unsplash';
import Monster from '../sites/Monster';
import Icon from '../sites/Icon';

class Routes extends Component{

    render(){
        return(
            <div>
                {/* <h1>This is Routes</h1> */}
                <Switch>
                    <Route exact path='/' component={() => <Home name='home'/>} />
                    <Route exact path='/text' component={() => <Text name='text' />} />
                    <Route exact path='/works' component={() => <Works name='works' />} />
                    <Route exact path='/json' component={() => <Json name='json' />} />
                    <Route exact path='/unsplash' component={() => <Unsplash name='unsplash' />} />
                    <Route exact path='/monster' component={() => <Monster name='monster' />} />
                    <Route exact path='/icon' component={() => <Icon name='icon' />} />
                    {/* <Route render={() => <NotFound />} /> */}
                </Switch>
            </div>
        )
    }

}

export default Routes;
