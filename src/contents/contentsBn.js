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
        description: "Fastest Internet in Town.",
        img: "../assets/computer.jpg",
      },
      {
        title: "শহরে দ্রুততম ইন্টারনেট ২।",
        description: "Fastest Internet in Town.",
        img: "../assets/fiber_optic.jpg",
      },
    ],
  },
};

export default contentsBn;
