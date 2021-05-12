import React, { useState, useEffect, useContext } from "react";

// global state
import { GlobalState } from "../context/context";

const About = () => {
  const state = useContext(GlobalState);
  const [contents, setContents] = useState(state.en.about);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setContents(state.bn.about);
    } else {
      setContents(state.en.about);
    }
  }, [state.lan, state.en.about, state.bn.about]);

  return (
    <div className="px-10 md:px-20 py-5 dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-center p-5 text-3xl font-bold uppercase">
        {contents.title}
      </h1>
      <p className="text-xl p-7">
        {contents.desc[0]}
        <br />
        {contents.desc[1]}
        <br />
        {contents.desc[2]}
      </p>
    </div>
  );
};

export default About;
