const portfolio = [
  {
    title: 'EpicTrips',
    link: 'https://epictrips.vercel.app/',
    description:
      'An app for users to create, share and view holiday itineraries to get their dream vacation #inspo. Built with Next.js and PostgreSQL (hosted on Supabase). I also used Prisma as my ORM, Auth0 for authentication, and Tailwind CSS for styling.',
  },
  {
    title: 'subSCRIBED',
    link: 'https://github.com/esskew213/subSCRIBED',
    description:
      'An app that helps you find and track your paid subscriptions. Interacting with the Gmail API, it looks through your inbox to identify possible subscriptions, and consolidates them for your review. The Python backend used FastAPI, PostgreSQL and the SQLAlchemy ORM; the frontend was React, styled with Material UI.',
  },
  {
    title: 'Scraboggle',
    link: 'https://scraboggle.netlify.app/',
    description:
      "My desktop version of Zynga's Boggle With Friends, coded entirely with HTML, CSS and object-oriented JavaScript. The most challenging part of the game logic was figuring out how to keep track of (1) which tiles were valid selections and (2) which tiles were being added or removed as the user drags their cursor across the board.",
  },
  {
    title: 'LunchGoWhere',
    link: 'https://lunchgowhere.netlify.app/',
    description:
      'A MERN stack app that allows users to add and review hawker stalls, to help resolve the perennial question — "What\'s for lunch?". It is deployed via Netlify, Heroku and MongoDB Atlas. Authentication / authorisation was implemented with JWTs, and we also configured Cloudinary to enable users to upload photos. Last but not least, this group project was invaluable in helping us learn about Git workflows.',
  },
];

export default portfolio;
