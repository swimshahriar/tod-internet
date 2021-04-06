import React, { useState, useEffect, useContext } from "react";

// components
import Packages from "../components/Packages";

// global state
import { GlobalState } from "../context/context";

const AllPackages = () => {
  const state = useContext(GlobalState);
  const [contents, setContents] = useState(state.en.packages);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setContents(state.bn.packages);
    } else {
      setContents(state.en.packages);
    }
  }, [state.lan, state.en.packages, state.bn.packages]);

  return (
    <div>
      <Packages contents={contents} />
    </div>
  );
};

export default AllPackages;
