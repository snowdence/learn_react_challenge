import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <ul>
        <input
          type="text"
          value={id}
          onChange={(e) =>
            setId(
              // @ts-ignore
              e.target.value
            )
          }
        />
        <div>Posts: {posts.title}</div>
        {/* {posts.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default DataFetching;
