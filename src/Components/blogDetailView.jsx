import React, { Component } from "react";
import axios from "axios";

class BlogDetail extends Component {
  state = {
    blog: {},
  };

  createMarkup = () => {
    return { __html: this.state.blog.content };
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const blogId = this.props.match.params.blogId;
    axios
      .get(`https://api.oytechnology.com/${blogId}`)
      .then((res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-md my-5">
        <img src={this.state.blog.thumbnail} alt="" />
        <h1 className="text-center">{this.state.blog.title}</h1>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}

export default BlogDetail;
