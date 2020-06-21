import React, { Component } from 'react';
import NewsArticle from './NewsArticle';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      colors:['#3498DB',"#FF6347",'#157DEC'] 
    }
  }

  componentWillReceiveProps(nextProps) {
    let request_url = `https://gnews.io/api/v3/search?q=market-list&country=in&token=696409bef9a155908ffc14238258119b`;

    fetch(request_url)
      .then(response => response.json())
      .then(json => {
        this.setState({ articles: json.articles });
      });
  }

  renderArticles() {
    const {colors} = this.state;
    return this.state.articles.map((article, index) => {
      return (
        <NewsArticle key={index} article={article}  color={this.state.colors[index%colors.length]}/>
      )
    });
  }
  
  render() {
    const articles = this.renderArticles();
    
    return (
      <div className="news-list">
        {articles}
      </div>
    );
  }
}

export default NewsList;