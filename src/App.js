import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import AllPackages from "./pages/AllPackages";
import Contact from "./pages/Contact";

// global state
import { GlobalState } from "./context/context";

const App = () => {
  const { theme } = useContext(GlobalState);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme && localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/packages">
          <AllPackages />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <ThemeToggle />
      <Footer />
    </>
  );
};

export default App;
