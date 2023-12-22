import React from "react";

const NewsItem = ({title,description,src,url}) => {
  return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:"https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?size=626&ext=jpg&ga=GA1.1.1648147192.1700233650&semt=ais"} style={{height:"200px", width:"330px"}} className="card-img-top" alt="News Image" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
           {description?description.slice(0,90):"A storm coming from the Gulf of Mexico is expected to crash into Florida on Saturday and strengthen"}
          </p>
          <a href={url} className="btn btn-primary">
          Read More..
          </a>
        </div>
      </div>
  );
};

export default NewsItem;
