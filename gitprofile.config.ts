// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'amillane', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['amillane/amillane', 'amillane/Provo_Weather-', 'amillane/Project_3'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['amillane/spatialtransform','amillane/geocache-bayesian-project','amillane/amillane.github.io', 'amillane/DataTrailblazing'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Caching In With Bayesian Statistics',
          description: 'Our Bayesian hierarchical model studies geocache data from Utah and California, asking whether the Terrain and Difficulty rating of a cache affects the number of favorites it receives.',
          imageUrl:
            'https://github.com/amillane/amillane.github.io/blob/main/public/Geocaching_Logo.png?raw=true',
          link: '/DataTrailblazing/projects/geocache/',
        },
        {
          title: 'The Monument Project',
          description:
            'Working alongside the Lord Mayor of London, City, University of London, and Imetrum, we began uncovering answers to questions about the Great Fire of London monument created by scientist Robert Hooke.',
          imageUrl:'https://github.com/amillane/amillane.github.io/blob/main/public/test.jpeg?raw=true',
          link: '/DataTrailblazing/projects/monument',
        },
        {
          title: 'Support Vector Regression',
          description:
            'Support Vector Regression (SVR) is a powerful supervised learning technique that balances complexity and generalization by minimizing a regularized risk function. This document explores the theoretical foundations of SVR, its implementation, and its application in predictive modeling.',
          imageUrl:'',
          link: 'https://amillane.github.io/DataTrailblazing/projects/svr',
        },
      ],
    },
  },
  blog2: {
      header: 'Articles',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Eye of The Storm',
          description:
            'For those who have been with me this entire journey, I hope you enjoyed the project as much as I did! This project started with a desire to know what is going on with the weather here in the West, specifically in Provo, Utah.',
          imageUrl:'https://images.unsplash.com/photo-1559828187-9bf6757861f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          tags: ['#project', '#weather', '#rain'],
          link: '/DataTrailblazing/post/class-project/',
        },
        {
          title: 'A Peek Through the Clouds',
          description:
            'John Tukey once said, “The greatest value of a picture is when it forces us to notice what we never expected to see”. There is something beautiful about taking a hodgepodge of data and transforming it into a story. What we could not see is now unveiled for us to discover and ask more questions. ',
          imageUrl:'https://miro.medium.com/v2/resize:fit:800/1*swBI4_YaHnMIwOvz3rGuFQ.jpeg',
          tags: ['#eda', '#weather'],
          link: '/DataTrailblazing/post/eda/',
        },
        {
          title: 'API Right As Rain',
          description:
            'North America is in a crisis. A crisis that trumps all other crises we are experiencing. The west is enduring one of the longest droughts ever recorded, which is bringing many dire consequences. While this problem looms over our heads, many are stepping up to the plate to solve this issue of water usage.',
          imageUrl:
            'https://www.stockvault.net/data/2007/03/01/98725/preview16.jpg',
          tags: ['#api', '#weather', '#drought'],
          link: '/DataTrailblazing/post/api/',
        },
        {
          title: 'A Nature Walk Into Machine Learning',
          description:
            'If you are wanting to know how to implement random forests in R, then you have come to the right place! Machine learning is a powerful tool that helps us accurately predict certain outcomes by creating a model with the information we give it. In other words, it ‘learns’ with what is given and predicts with data that hasn’t been seen yet.',
          imageUrl:'https://www.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
          tags: ['#machinelearning', '#randomforest', '#kaggle'],
          link: '/DataTrailblazing/post/random-forest/',
        },
      ],
    },
  seo: {
    title: 'Drew Millane',
    description: '',
    imageURL: 'https://github.com/amillane/amillane.github.io/blob/main/public/favicon-16x16.png?raw=true',
  },
  social: {
    linkedin: 'drewmillane',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '' ,
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'amillane.github.io/DataTrailblazing/',
    phone: '',
    email: 'amillane99@outlook.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1fbJ01yI4kD8D6PUoHFb_XqlckJxxEW-Q/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   'R',
  'Python',
    'SQL',
    'SAS',
    'sklearn',
    'tidymodels',
    'Linux',
    'Excel',
    'RShiny',
    'STAN',
    'NIMBLE',
    'JAGS',
    'Bayesian Statistics',
    'Statistical Modeling',
    'Predictive Analytics',
    'Linear Models',
    'Machine Learning',
    'Data Mining',
    'Generalized Linear Models',
    'Mixed Models'
    
  ],
  experiences: [
      {
      company: 'Y2 Analytics',
      position: 'Intern Data Analyst',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://y2analytics.com/',
      },
      {
      company: 'BYU Statistics Department',
      position: 'Research Assistant',
      from: 'April 2022',
      to: 'Present',
      companyLink: 'https://statistics.byu.edu/',
      },
       {
      company: 'BYU Statistics Department',
      position: 'Teaching Assistant',
      from: 'December 2021',
      to: 'Present',
      companyLink: 'https://statistics.byu.edu/',
    },
    {
      company: 'Imetrum',
      position: 'Data Science Intern',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://www.imetrum.com/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Brigham Young University',
      degree: 'Masters of Statistics',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Brigham Young University',
      degree: 'Bachelors of Statistics',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      //'bumblebee',
      //'emerald',
      //'corporate',
      //'synthwave',
     // 'retro',
      //'cyberpunk',
      //'valentine',
      //'halloween',
      //'garden',
      //'forest',
      //'aqua',
      //'lofi',
      //'pastel',
      //'fantasy',
      //'wireframe',
      //'black',
      //'luxury',
      //'dracula',
      //'cmyk',
      //'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
      //'coffee',
     // 'winter',
      //'dim',
      //'nord',
      //'sunset',
      //'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
