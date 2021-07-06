import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
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
        <button onClick={() => handleClick()}>Fetch</button>
        <div>Posts: {posts.title}</div>
        {/* {posts.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default DataFetching;
