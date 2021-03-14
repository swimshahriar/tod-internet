// icons
import { BsGear, BsCheckCircle, BsChat } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";

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
      },
      {
        title: "The fastest Internet in Town2.",
        description: "The fastest Internet in Town.",
      },
    ],
    whyOurNetwork: {
      title: "Why Choose Our Network?",
      features: [
        {
          icon: <BsGear />,
          desc: "Quick Installation and Setup",
        },
        {
          icon: <BsCheckCircle />,
          desc: "Fast and Reliable Network",
        },
        {
          icon: <FaNetworkWired />,
          desc: "Fully FTTH Network",
        },
        {
          icon: <BsChat />,
          desc: "24/7 Online and Call Support",
        },
      ],
    },
  },
};

export default contentsEn;
