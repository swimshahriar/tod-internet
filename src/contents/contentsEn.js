// icons
import {
  BsGear,
  BsCheckCircle,
  BsChat,
  BsFillCameraVideoFill,
} from 'react-icons/bs';
import {
  FaNetworkWired,
  FaGlobe,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { CgListTree } from 'react-icons/cg';
import { MdSecurity, MdRouter, MdVpnKey } from 'react-icons/md';

const contentsEn = {
  // header section
  header: {
    logo: 'TOD',
    nav: [
      {
        name: 'Home',
        link: process.env.PUBLIC_URL + '/',
      },
      {
        name: 'Packages',
        link: process.env.PUBLIC_URL + '/packages',
      },
      {
        name: 'About',
        link: process.env.PUBLIC_URL + '/about',
      },
      {
        name: 'Contact',
        link: process.env.PUBLIC_URL + '/contact',
      },
    ],
  },
  // home page
  home: {
    carousel: [
      {
        title: 'The fastest Internet in Town.',
        description: 'The fastest Internet in Town..',
      },
      {
        title: 'The fastest Internet in Town2.',
        description: 'The fastest Internet in Town.',
      },
    ],
    whyOurNetwork: {
      title: 'Why Choose Our Network?',
      features: [
        {
          icon: <BsGear />,
          desc: 'Quick Installation and Setup',
        },
        {
          icon: <BsCheckCircle />,
          desc: 'Fast and Reliable Network',
        },
        {
          icon: <FaNetworkWired />,
          desc: 'Fully FTTH Network',
        },
        {
          icon: <BsChat />,
          desc: '24/7 Online and Call Support',
        },
      ],
    },
    packages: {
      title: 'Our Internet Packages',
      info: [
        {
          name: 'GOLD',
          price: '1000 Tk/month',
          fav: false,
          features: [
            '40 Mbps (2am to 8pm)',
            '10 Mbps (8pm to 2am)',
            'BDIX Bandwidth - Unlimited',
            '4k Youtube and Facebook',
            'Only IPv4',
          ],
        },
        {
          name: 'DIAMOND',
          price: '1500 Tk/month',
          fav: true,
          features: [
            '60 Mbps (2am to 8pm)',
            '15 Mbps (8pm to 2am)',
            'BDIX Bandwidth - Unlimited',
            '4k Youtube and Facebook',
            'IPv4 and IPv6',
          ],
        },
        {
          name: 'SAPPHIRE',
          price: '2000 Tk/month',
          fav: false,
          features: [
            '80 Mbps (2am to 8pm)',
            '30 Mbps (8pm to 2am)',
            'BDIX Bandwidth - Unlimited',
            '4k Youtube and Facebook',
            'IPv4 and IPv6',
          ],
        },
      ],
    },
    services: {
      title: 'Services We Offer',
      list: [
        {
          icon: <FaGlobe />,
          desc: 'Broadband Home Internet',
        },
        {
          icon: <MdVpnKey />,
          desc: 'Corporate Data-VPN Service',
        },
        {
          icon: <MdRouter />,
          desc: 'Corporate Network Solution',
        },
        {
          icon: <MdSecurity />,
          desc: 'Network Security',
        },
        {
          icon: <CgListTree />,
          desc: 'Dedicated Server Hosting',
        },
        {
          icon: <BsFillCameraVideoFill />,
          desc: 'CCTV System Solution',
        },
      ],
    },
    partners: {
      title: 'Our Partners',
      list: [
        {
          icon: '',
          link: '',
          name: 'ISPAB',
        },
        {
          icon: '',
          link: '',
          name: 'Google',
        },
        {
          icon: '',
          link: '',
          name: 'Facebook',
        },
        {
          icon: '',
          link: '',
          name: 'BDIX',
        },
        {
          icon: '',
          link: '',
          name: 'CISCO',
        },
        {
          icon: '',
          link: '',
          name: 'MikroTik',
        },
      ],
    },
  },
  // Packages
  packages: {
    title: 'All Internet Packages',
    info: [
      {
        name: 'GOLD',
        price: '1000 Tk/month',
        fav: false,
        features: [
          '40 Mbps (2am to 8pm)',
          '10 Mbps (8pm to 2am)',
          'BDIX Bandwidth - Unlimited',
          '4k Youtube and Facebook',
          'Only IPv4',
        ],
      },
      {
        name: 'DIAMOND',
        price: '1500 Tk/month',
        fav: true,
        features: [
          '60 Mbps (2am to 8pm)',
          '15 Mbps (8pm to 2am)',
          'BDIX Bandwidth - Unlimited',
          '4k Youtube and Facebook',
          'IPv4 and IPv6',
        ],
      },
      {
        name: 'SAPPHIRE',
        price: '2000 Tk/month',
        fav: false,
        features: [
          '80 Mbps (2am to 8pm)',
          '30 Mbps (8pm to 2am)',
          'BDIX Bandwidth - Unlimited',
          '4k Youtube and Facebook',
          'IPv4 and IPv6',
        ],
      },
      {
        name: 'STAR',
        price: '2500 Tk/month',
        fav: false,
        features: [
          '90 Mbps (2am to 8pm)',
          '40 Mbps (8pm to 2am)',
          'BDIX Bandwidth - Unlimited',
          '4k Youtube and Facebook',
          'IPv4 and IPv6',
        ],
      },
      {
        name: 'SKY',
        price: '3000 Tk/month',
        fav: true,
        features: [
          '100 Mbps (2am to 8pm)',
          '50 Mbps (8pm to 2am)',
          'BDIX Bandwidth - Unlimited',
          '4k Youtube and Facebook',
          'IPv4 and IPv6',
        ],
      },
    ],
  },
  // Footer
  footer: {
    mediaServices: {
      title: 'Media Services',
      list: [
        {
          title: 'FTP',
          link: '#',
        },
        {
          title: 'Live TV',
          link: '#',
        },
      ],
    },
    pages: {
      title: 'Pages',
      list: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Packages',
          link: '/packages',
        },
        {
          title: 'About',
          link: '/about',
        },
        {
          title: 'Contact',
          link: '/cotact',
        },
      ],
    },
    socialLinks: {
      title: 'Socials',
      links: [
        {
          title: 'Facebook',
          link: 'https://www.facebook.com',
          icon: <FaFacebookSquare />,
        },
        {
          title: 'Twitter',
          link: 'https://www.twitter.com',
          icon: <FaTwitterSquare />,
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com',
          icon: <FaInstagramSquare />,
        },
      ],
    },
    copyright: `© Copyright ${new Date().getFullYear()} | TOD Internet`,
  },
};

export default contentsEn;
