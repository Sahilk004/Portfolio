export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Codubucks - A Crypto Platform',
      desc: 'Cryptobucks is a cryptocurrency information platform designed to keep users informed about the latest trends and details in the crypto world. Using real-time data from cryptocurrency APIs, it provides up-to-date information on various cryptocurrencies, including prices, market capitalization, and other key metrics. Built with a responsive and user-friendly design.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React,Tailwind CSS,Javascript,Coingecko API.Cryptobucks is an ideal resource for anyone looking to stay updated in the fast-paced world of digital currency',
      href: 'https://crypto-wv24.vercel.app/',
      texture: '/textures/project/cryptoo.mp4',
      logo: '/assets/crypto.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        
      ],
    },
    {
      title: 'Porsche - Redesigned Porsche Website',
      desc: "Redesigned the Porsche website using HTML, CSS, and JavaScript with a focus on smooth animations and interactive elements. This project emphasizes a modern, user-friendly layout that aligns with the luxury brand's aesthetic. Enhanced navigation, visual hierarchy, and responsive design ensure a seamless experience across devices, while animations add dynamic interactions that enrich the user experience. This project highlights my skills in crafting visually engaging and interactive web interfaces.",
      subdesc:
        '',
      href: 'https://errorcreators-reimagine-round1.vercel.app/',
      texture: '/textures/project/porsche.mp4',
      logo: '/assets/Porsche.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/htmll.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
      ],
    },
    {
      title: 'pTron Website Redesign',
      desc: "Designed and developed a pTron website using HTML, CSS, and JavaScript, focusing on a modern, user-friendly interface that showcases the brand's tech-forward image. The site includes engaging animations and interactive elements to enhance the visual appeal and user experience. Key features include a responsive layout and smooth transitions, creating a seamless browsing experience across devices. This project highlights my skills in front-end development and attention to design aesthetics.",
      subdesc:
        'A sleek, interactive redesign for pTron’s website, integrating animations and a responsive layout to enhance the user experience. Built with HTML, CSS, and JavaScript to deliver a visually dynamic, device-friendly interface that aligns with the brand’s modern image.',
      href: 'https://errorcreators-reimagine-round2.vercel.app/',
      texture: '/textures/project/ptron.mp4',
      logo: '/assets/pTron.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/htmll.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/javascript.png',
        },
        
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Javascript',
      // pos: 'Lead Web Developer',
      // duration: '2022 - Present',
      title: "Proficient in JavaScript, using it to build dynamic, interactive web experiences and to enhance frontend functionality across my projects.",
      icon: '/assets/javascript.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'React',
      // pos: 'Web Developer',
      // duration: '2020 - 2022',
      title: " Experienced with React, leveraging its component-based architecture for efficient UI development and state management. I create responsive, high-performance applications that prioritize user experience.",
      icon: '/assets/react.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Three.js',
      // pos: 'Junior Web Developer',
      // duration: '2019 - 2020',
      title: "Currently expanding my skills in Three.js to integrate 3D models and animations into web projects, adding immersive and visually engaging elements to web designs.",
      icon: '/assets/Threejs.png',
      animation: 'salute',
    },
  ];