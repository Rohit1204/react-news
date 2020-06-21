import React, { Component } from 'react';
import "./NewsArticle.css";

class NewsArticle extends Component {

  render() {
    const article = this.props.article;
    const color= this.props.color;

   
    
    return (
      <div className="media" style = {{backgroundColor : color}}>
        <div className="media-content">
          <div className="content">
        <li>
        <h4>{article.publishedAt}</h4>
              <a href={article.url} target="_blank">
                <strong>{article.title}</strong>
              </a>
              <br/>
              
              {article.description}
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;