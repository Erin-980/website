// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Erin',
    title: 'Data Analyst',
    image: getAsset(''), // Customize or replace with your profile image
    description:
      'Aspiring Data Analyst. Student at Christ University pursuing BSc Economics with Data Science' +
      '\n' +
      'Christ University. Aspiring Data Analyst.\n' +
      '\n' +
      ' Studied at Graisley Primary School and Christ Academy Junior College pursuring science. Currently pursuring Economics at Christ University. Learnt Pyhton, Java, C++,C, SQL, Excel. \n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'To infinity and beyond.',
    location: 'Bangalore,India',
  },

  seo: {
    title: 'Your Name – Your Title',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Your Role', 'Your Focus', 'Your Interest', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/



  education: [
    {
      institution: 'Graisley Primary School',
      degree: 'Primary Education',
      year: '2015-2017',
      image: getAsset('images/education/placeholder.png'),
    },
    {
      institution: 'Christ Academy Junior College',
      degree: 'Pre University',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Pursued Science along with programming skills.'],
    },
  ],

  // ✅ Experience section updated
  experience: [
    {
      title: 'Student',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Christ University',
      time: '(2025– Present)',
      desp: ['Student', 'Researcher'],
    },
  ],

  contact: {
    email: 'erin.braggs08@gmail.com',
    github: 'https://github.com/Erin-980/website/edit/main/src/config/config.ts',
  },
};

export default siteConfig;
