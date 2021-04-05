import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CardText from "./cardWithText";
import SectionWithBgImg from "./sectionBgImage";
import "./css/blogList.css";
import blogHeadBg from "../Images/blogging.png";

class BlogList extends Component {
  state = {
    blogsList: [],
    category: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("http://13.233.179.209:8000/api-blog/")
      .then((res) => {
        this.setState({
          blogsList: res.data,
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <div>
          <SectionWithBgImg imgUrl={blogHeadBg} divHeight="50vh" />
        </div>
        <div className="d-lg-flex flex-wrap container">
          {this.state.blogsList.map((blog) => {
            return (
              <div className="blogCard">
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="blogLink"
                >
                  <CardText
                    superHead={blog.title}
                    heading={<small>{blog.date_added.slice(0, 10)}</small>}
                    text={blog.description}
                    bgimg={blog.thumbnail}
                    // dark={true}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default BlogList;
