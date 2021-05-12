// icons
import {
  BsGear,
  BsCheckCircle,
  BsChat,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import {
  FaNetworkWired,
  FaGlobe,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { CgListTree } from "react-icons/cg";
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
          icon: <CgListTree />,
          desc: "Dedicated Server Hosting",
        },
        {
          icon: <BsFillCameraVideoFill />,
          desc: "CCTV System Solution",
        },
      ],
    },
    partners: {
      title: "Our Partners",
      list: [
        {
          icon: "",
          link: "",
          name: "ISPAB",
        },
        {
          icon: "",
          link: "",
          name: "Google",
        },
        {
          icon: "",
          link: "",
          name: "Facebook",
        },
        {
          icon: "",
          link: "",
          name: "BDIX",
        },
        {
          icon: "",
          link: "",
          name: "CISCO",
        },
        {
          icon: "",
          link: "",
          name: "MikroTik",
        },
      ],
    },
  },
  // Packages
  packages: {
    title: "All Internet Packages",
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
      {
        name: "STAR",
        price: "2500 Tk/month",
        fav: false,
        features: [
          "90 Mbps (2am to 8pm)",
          "40 Mbps (8pm to 2am)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube and Facebook",
          "IPv4 and IPv6",
        ],
      },
      {
        name: "SKY",
        price: "3000 Tk/month",
        fav: true,
        features: [
          "100 Mbps (2am to 8pm)",
          "50 Mbps (8pm to 2am)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube and Facebook",
          "IPv4 and IPv6",
        ],
      },
    ],
  },
  // about
  about: {
    title: "About",
    desc: [
      "TOD Internet has started its operation in the year 2005 with the commitment of quality internet service at an affordable price. At the time of commencement TOD Internet started with broadband service with the state of art technology. In the course of time it’s R & D team has developed and introduced many new technologies to meet the requirement of new millennium. In the last 15 years TOD Internet has introduced many new ideas and technologies to the internet industry.",
      "We beieve we will be successful if our clients are successful. Solving the hardest problems requires the best people. We think that the best people will be drawn to the opportunity to work on the hardest problems. We have built our company around that belief.",
      "One of our main Aim is to satisfy all the Gamers out there, by providing them with stable Internet Connection along with Real IP and port blocking/forwarding solutions, good stable pings in European and Singapore servers.",
    ],
  },
  // contact page
  contact: {
    title: "Contact",
    form: ["Name", "Email", "Subject", "Message"],
    office: {
      title: "Head Office",
      address: "Bashundhara R/A, Dhaka",
      phone: "+8801777111111",
      email: "admin@tod.com",
    },
    button: "send",
  },
  // Footer
  footer: {
    mediaServices: {
      title: "Media Services",
      list: [
        {
          title: "FTP",
          link: "#",
        },
        {
          title: "Live TV",
          link: "#",
        },
      ],
    },
    pages: {
      title: "Pages",
      list: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Packages",
          link: "/packages",
        },
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Contact",
          link: "/cotact",
        },
      ],
    },
    socialLinks: {
      title: "Socials",
      links: [
        {
          title: "Facebook",
          link: "https://www.facebook.com",
          icon: <FaFacebookSquare />,
        },
        {
          title: "Twitter",
          link: "https://www.twitter.com",
          icon: <FaTwitterSquare />,
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com",
          icon: <FaInstagramSquare />,
        },
      ],
    },
    copyright: `© Copyright ${new Date().getFullYear()} | TOD Internet`,
  },
};

export default contentsEn;
