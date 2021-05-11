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
    packages: {
      title: "আমাদের ইন্টারনেট প্যাকেজেস",
      info: [
        {
          name: "গোল্ড",
          price: "১৫০০ টাকা/মাসে",
          fav: false,
          features: [
            "৪০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
            "১০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube এবং Facebook",
            "শুধুমাত্র IPv4",
          ],
        },
        {
          name: "ডায়মন্ড",
          price: "১৫০০ টাকা/মাসে",
          fav: true,
          features: [
            "৬০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
            "১৫ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube এবং Facebook",
            "IPv4 এবং IPv6",
          ],
        },
        {
          name: "স্যাফায়ার",
          price: "২০০০ টাকা/মাসে",
          fav: false,
          features: [
            "৮০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
            "৩০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
            "BDIX Bandwidth - Unlimited",
            "4k Youtube এবং Facebook",
            "IPv4 এবং IPv6",
          ],
        },
      ],
    },
    services: {
      title: "Services We Offer",
      list: [
        {
          icon: <FaGlobe />,
          desc: "ব্রডব্যান্ড হোম ইন্টারনেট",
        },
        {
          icon: <MdVpnKey />,
          desc: "কর্পোরেট Data-VPN সার্ভিস",
        },
        {
          icon: <MdRouter />,
          desc: "কর্পোরেট নেটওয়ার্ক সমাধান",
        },
        {
          icon: <MdSecurity />,
          desc: "নেটওয়ার্ক সুরক্ষা",
        },
        {
          icon: <CgListTree />,
          desc: "Dedicated সার্ভার হোস্টিং",
        },
        {
          icon: <BsFillCameraVideoFill />,
          desc: "CCTV সিস্টেম সমাধান",
        },
      ],
    },
    partners: {
      title: "আমাদের পার্টনার সমূহ",
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
    title: "সকল ইন্টারনেট প্যাকেজেস",
    info: [
      {
        name: "গোল্ড",
        price: "১৫০০ টাকা/মাসে",
        fav: false,
        features: [
          "৪০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
          "১০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube এবং Facebook",
          "শুধুমাত্র IPv4",
        ],
      },
      {
        name: "ডায়মন্ড",
        price: "১৫০০ টাকা/মাসে",
        fav: true,
        features: [
          "৬০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
          "১৫ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube এবং Facebook",
          "IPv4 এবং IPv6",
        ],
      },
      {
        name: "স্যাফায়ার",
        price: "২০০০ টাকা/মাসে",
        fav: false,
        features: [
          "৮০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
          "৩০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube এবং Facebook",
          "IPv4 এবং IPv6",
        ],
      },
      {
        name: "স্টার",
        price: "২৫০০ টাকা/মাসে",
        fav: true,
        features: [
          "৯০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
          "৪০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube এবং Facebook",
          "IPv4 এবং IPv6",
        ],
      },
      {
        name: "স্কাই",
        price: "৩০০০ টাকা/মাসে",
        fav: false,
        features: [
          "১০০ Mbps (রাত ২ঃ০০ থেকে রাত ৮ঃ০০ টা)",
          "৫০ Mbps (রাত ৮ঃ০০ থেকে রাত ২ঃ০০ টা)",
          "BDIX Bandwidth - Unlimited",
          "4k Youtube এবং Facebook",
          "IPv4 এবং IPv6",
        ],
      },
    ],
  },
  // contact page
  contact: {
    title: "যোগাযোগ",
    form: ["নাম", "ইমেইল", "বিষয়", "বার্তা"],
    office: {
      title: "হেড অফিস",
      address: "বসুন্ধারা আবাসিক, ঢাকা",
      phone: "+৮৮০১৭৭৭১১১১১১",
      email: "admin@tod.com",
    },
    button: "সেন্ড",
  },
  // Footer
  footer: {
    mediaServices: {
      title: "মিডিয়া সেবা",
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
      title: "পেজেস",
      list: [
        {
          title: "হোম",
          link: "/",
        },
        {
          title: "প্যাকেজেস",
          link: "/packages",
        },
        {
          title: "সম্পর্কিত",
          link: "/about",
        },
        {
          title: "যোগাযোগ",
          link: "/cotact",
        },
      ],
    },
    socialLinks: {
      title: "সামাজিক যোগাযোগ মাধ্যম",
      links: [
        {
          title: "ফেসবুক",
          link: "https://www.facebook.com",
          icon: <FaFacebookSquare />,
        },
        {
          title: "টুইটার",
          link: "https://www.twitter.com",
          icon: <FaTwitterSquare />,
        },
        {
          title: "ইন্সটাগ্রাম",
          link: "https://www.instagram.com",
          icon: <FaInstagramSquare />,
        },
      ],
    },
    copyright: `© কপিরাইট ${new Date().getFullYear()} | টোড ইন্টারনেট`,
  },
};

export default contentsBn;
