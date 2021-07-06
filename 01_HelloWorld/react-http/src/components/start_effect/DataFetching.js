import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
