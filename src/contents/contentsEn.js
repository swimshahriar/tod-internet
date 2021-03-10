// assets
// import computer from '"../assets/computer.jpg"';
// import fiberOptic from "../assets/fiber_optic.jpg";

const contentsEn = {
  // header section
  header: {
    logo: "TOD",
    nav: [
      {
        name: "Home",
        link: process.env.PUBLIC_URL + "/",
      },
      {
        name: "Packages",
        link: process.env.PUBLIC_URL + "/packages",
      },
      {
        name: "About",
        link: process.env.PUBLIC_URL + "/about",
      },
      {
        name: "Contact",
        link: process.env.PUBLIC_URL + "/contact",
      },
    ],
  },
  // home page
  home: {
    carousel: [
      {
        title: "The fastest Internet in Town.",
        description: "The fastest Internet in Town..",
        img: process.env.PUBLIC_URL + "/assets/computer.jpg",
      },
      {
        title: "The fastest Internet in Town2.",
        description: "The fastest Internet in Town.",
        img: process.env.PUBLIC_URL + "/assets/fiber_optic.jpg",
      },
    ],
  },
};

export default contentsEn;
