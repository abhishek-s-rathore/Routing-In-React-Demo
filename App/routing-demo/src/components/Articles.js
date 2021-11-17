import React from "react";
import { Link } from "react-router-dom";

import articles from '../data/data.json'

class Articles extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(articles);
        return(
            <>
            <h1> Articles</h1>
            <ul>
            {
                articles.map(article=>{
                    return<>
                    <Link to={`/articles/${article.slug}`}>
                        <li>
                        <h2>{article.title}</h2>
                        </li>
                    </Link>    
                        </>
            })
            }
            </ul>
            
            </>
        );
    }

}

export default Articles;