import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title = `${props.category} - NewsMonkey `;

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey} &page=${Page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apiKey}&page=${
      Page + 1
    }&pagesize=${props.pagesize}`;
    setPage(Page + 1);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData);

    props.setProgress(100);
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center my-7"
        style={{ margin: "35px 0px", marginTop: "62px" }}
      >
        NewsMonkey - Top Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    source={element.source.name}
                    description={element.description}
                    author={element.author}
                    date={element.publishedAt}
                    imgURL={element.urlToImage}
                    newsURL={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
