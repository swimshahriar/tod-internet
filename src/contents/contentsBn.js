// icons
import { BsGear, BsCheckCircle, BsChat } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";

const contentsBn = {
  // header section
  header: {
    logo: "টোড",
    nav: [
      {
        name: "হোম",
        link: process.env.PUBLIC_URL + "/",
      },
      {
        name: "প্যাকেজেস",
        link: process.env.PUBLIC_URL + "/packages",
      },
      {
        name: "সম্পর্কিত",
        link: process.env.PUBLIC_URL + "/about",
      },
      {
        name: "যোগাযোগ",
        link: process.env.PUBLIC_URL + "/contact",
      },
    ],
  },
  // home page
  home: {
    carousel: [
      {
        title: "শহরে দ্রুততম ইন্টারনেট।",
        description: "শহরে দ্রুততম ইন্টারনেট।",
      },
      {
        title: "শহরে দ্রুততম ইন্টারনেট ২।",
        description: "শহরে দ্রুততম ইন্টারনেট ২।",
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

export default contentsBn;
