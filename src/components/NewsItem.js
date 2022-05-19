import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, source, description, imgURL, newsURL, author, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <img src={imgURL} className="card-img-top" alt="..." />
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>

            <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
