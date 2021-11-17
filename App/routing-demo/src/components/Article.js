import React from "react";

import articles from '../data/data.json';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            article: null,
        }
    }

    componentDidMount(){
        let slug = this.props.match.params.slug
        let art =  articles.filter(article=>{
            return (article.slug === slug);
        });

        console.log(art, articles, 'hey');

        this.setState({article: art});
    }

    render(){
        let art = this.state.article;
        return(
            <>
            <article>
            <h3> { art ? art[0].title : 'Fetching...'}</h3> 
             <cite>{art ? art[0].author: 'Fetching...'}</cite>
            </article>
            </>
        );
    }

}

export default Article;