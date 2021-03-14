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
      title: "কেন আমাদের নেটওয়ার্ক বেছে নেবেন?",
      features: [
        {
          icon: <BsGear />,
          desc: "দ্রুত Installation এবং Setup",
        },
        {
          icon: <BsCheckCircle />,
          desc: "দ্রুত এবং বিশ্বাসযোগ্য নেটওয়ার্ক",
        },
        {
          icon: <FaNetworkWired />,
          desc: "পুরোপুরি FTTH নেটওয়ার্ক",
        },
        {
          icon: <BsChat />,
          desc: "২৪/৭ অনলাইন এবং কল সুবিধা",
        },
      ],
    },
  },
};

export default contentsBn;
