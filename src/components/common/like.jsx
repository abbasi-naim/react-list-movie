import React from "react";

const Like = () => {
  let classes = "fa fa-heart";
  if (!this.props.liked) classes += "-o";
  return <i onClick={this.props.onClick} className={classes} aria-hidden="true"></i>;
}; 

export default Like;
