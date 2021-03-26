import React, { useState, useEffect, useContext } from "react";

// components
import Carousel from "../components/Carousel";
import Packages from "../components/Packages";
import Services from "../components/Services";
import WhyOurNetwork from "../components/WhyOurNetwork";

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

  return (
    <div>
      <Carousel contents={contents.carousel} />
      <WhyOurNetwork contents={contents.whyOurNetwork} />
      <Packages contents={contents.packages} />
      <Services />
    </div>
  );
};

export default Home;
