// icons
import {
  BsGear,
  BsCheckCircle,
  BsChat,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { FaNetworkWired, FaGlobe } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { MdSecurity, MdRouter, MdVpnKey } from "react-icons/md";

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
    packages: {
      title: "Our Internet Packages",
      info: [
        {
          name: "GOLD",
          price: "1000 Tk/month",
          fav: false,
          features: [
            "40 Mbps (2am to 8pm)",
            "10 Mbps (8pm to 2am)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube and Facebook",
            "Only IPv4",
          ],
        },
        {
          name: "DIAMOND",
          price: "1500 Tk/month",
          fav: true,
          features: [
            "60 Mbps (2am to 8pm)",
            "15 Mbps (8pm to 2am)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube and Facebook",
            "IPv4 and IPv6",
          ],
        },
        {
          name: "SAPPHIRE",
          price: "2000 Tk/month",
          fav: false,
          features: [
            "80 Mbps (2am to 8pm)",
            "30 Mbps (8pm to 2am)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube and Facebook",
            "IPv4 and IPv6",
          ],
        },
      ],
    },
    services: {
      title: "Services We Offer",
      list: [
        {
          icon: <FaGlobe />,
          desc: "Broadband Home Internet",
        },
        {
          icon: <MdVpnKey />,
          desc: "Corporate Data-VPN Service",
        },
        {
          icon: <MdRouter />,
          desc: "Corporate Network Solution",
        },
        {
          icon: <MdSecurity />,
          desc: "Network Security",
        },
        {
          icon: <RiNodeTree />,
          desc: "Dedicated Server Hosting",
        },
        {
          icon: <BsFillCameraVideoFill />,
          desc: "CCTV System Solution",
        },
      ],
    },
  },
};

export default contentsEn;
