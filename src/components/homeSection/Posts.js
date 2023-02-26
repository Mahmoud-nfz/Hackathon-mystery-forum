import React from "react";
import Post from "./Post";
import Post1 from "../Dashboard/MyQuestions/post1";
import Post2 from "../Dashboard/MyQuestions/post2";

const Posts = () => {
  return (
    <div className=" h-[80vh] overflow-y-scroll overflow-x-hidden no-scrollbar ">
        <Post/>
        <Post1/>
        <Post2/>
    </div>
  );
};

export default Posts;
