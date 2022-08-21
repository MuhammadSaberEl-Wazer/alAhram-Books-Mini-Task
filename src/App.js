import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Home from "./components/Home/Home";

// let baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const [posts, setPost] = useState(null);
  const [NoOfPagi, setNoOfPagi] = useState(1);

  let baseURL = `https://gutendex.com/books/?page=${NoOfPagi}`;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [baseURL, NoOfPagi]);

  const getPagi = useCallback(
    (e) => {
      let x = e.target.value;

      if (x == "next") {
        if (NoOfPagi != 5) {
          let newNum = NoOfPagi + 1;
          setNoOfPagi(newNum);
        }
      } else if (x == "prev") {
        if (NoOfPagi != 1) {
          let newNum = NoOfPagi - 1;
          setNoOfPagi(newNum);
        }
      } else {
        setNoOfPagi(e.target.value);
      }
    },
    [NoOfPagi]
  );

  console.log(baseURL);

  return (
    <section className="app">
      <Navbar />

      <Home posts={posts} getPagi={getPagi} NoOfPagi={NoOfPagi} />
      {/* <h1 className="text-3xl font-bold underline text-red-200">
        Hello world!
      </h1> */}
    </section>
  );
}

export default App;
