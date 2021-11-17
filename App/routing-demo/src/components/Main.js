import React from "react";
import { Route , Switch} from 'react-router-dom';

import Home from  './Home';
import Articles from  './Articles';
import Article from "./Article";
import People from './People';
import Books from  './Books';
import Help from  './Help';
import NotFound from  './NotFound';

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <h1>het</h1>
            <main className='flex-80'>
            <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/help">
                <Help />
            </Route>
            <Route path="/articles" exact>
                <Articles />    
            </Route>
            <Route path="/people">
                <People />
            </Route>
            <Route path="/books">
                <Books />
            </Route>
            <Route path="/articles/:slug" component={Article} />
            <Route path="*">
                <NotFound />
            </Route>
            </Switch>
            </main>
            </>
        );
    }

}

export default Main;