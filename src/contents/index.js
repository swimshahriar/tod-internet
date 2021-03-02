const contents = {
  // header section
  header: {
    logoEn: "TOD",
    logoBn: "টোড",
    nav: [
      {
        nameEn: "Home",
        nameBn: "হোম",
        link: process.env.PUBLIC_URL + "/",
      },
      {
        nameEn: "Packages",
        nameBn: "প্যাকেজেস",
        link: process.env.PUBLIC_URL + "/packages",
      },
      {
        nameEn: "About",
        nameBn: "সম্পর্কিত",
        link: process.env.PUBLIC_URL + "/about",
      },
      {
        nameEn: "Contact",
        nameBn: "যোগাযোগ",
        link: process.env.PUBLIC_URL + "/contact",
      },
    ],
  },
};

export default contents;
