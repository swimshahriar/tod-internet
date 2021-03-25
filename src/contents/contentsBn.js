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
  },
};

export default contentsBn;
