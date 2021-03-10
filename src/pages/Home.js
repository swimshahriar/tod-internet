import React, { useState, useEffect, useContext } from "react";

// components
import Carousel from "../components/Carousel";

// gobal state
import { GlobalState } from "../context/context";

const Home = () => {
  const state = useContext(GlobalState);
  const [contents, setContents] = useState(state.en.home);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setContents(state.bn.home);
    } else {
      setContents(state.en.home);
    }
  }, [state.lan, state.en.home, state.bn.home]);

  console.log(contents);

  return (
    <div>
      <Carousel contents={contents.carousel} />
    </div>
  );
};

export default Home;
