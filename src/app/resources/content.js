import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Noufal Zainudin",
  lastName: "Zidane",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "IT Engineer",
  avatar: "/images/me-2.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese", ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/redheet",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nozazi/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/62819326114090",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:zidanroedal@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>IT Engineer</>,
  subline: (
    <>
      I'm Noufal, a IT Engineer at <InlineCode>AL-FAKHIR</InlineCode>, where
      I craft network <br /> server for user experiences. After hours, I build
      my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/のさし-rbmqfo/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As an open-minded person who loves to learn something new, i can adapt
        quickly and work well both individually or as part of the team. My
        personal interests are mostly focused on Javascript framework. 
        However, at the moment, my interest is mostly related to IT
        industry ( Network Adminstration, IT Engineer ).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SMPI Modern Al-Fakhir",
        timeframe: "Nov 2023 - Present",
        role: "Network Administrator & Web Developer",
        achievements: [
          <>
            as an IT Engineer at Modern Al-Fakhir school I created a network
            server, to manage the needs of IoT and cloud-based lessons which in
            the school do not use books but use TAB for learning media.
          </>,
          <>
            for my job as a web developer, I create websites for school
            portfolios, online learning, and various school needs.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/alfakhir/main.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/alfakhir/lms.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/alfakhir/server.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/alfakhir/iot.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Indonesian Young Scientist Association",
        timeframe: "Mar 2019 - Oct 2022",
        role: "Web Developer",
        achievements: [
          <>
            I created a company profile website to manage participant data and
            employee data.
          </>,
          <>
            I build website HRM ( Human Resource Management ), Accounting and
            many event needed by company.
          </>,
        ],
        images: [
          {
            src: "/images/projects/iysa/iysa.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/iysa/i2aspo.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Miftaahul Hudaa",
        timeframe: "Jan 2018 - Feb 2019",
        role: "Teacher",
        achievements: [
          <>
            I teach as a fiqh and tajweed teacher at Madrasah Ibtidaiyah, MTS.
          </>,
          <>I also teach IQRO for the paud class</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pamulang",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Sirojan Muniro",
        description: <>Islamic Studies.</>,
      },
      {
        name: "Build With Angga",
        description: <>Studied online programing to create a marketing website using laravel and nodejs.</>,
      },
    ],
  },
  developer: {
    display: true, // set to false to hide this section
    title: "Developer Skills",
    program: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Engineer skills",
    skills: [
      {
        title: "Mikrotik, Router & Switch",
        description: (
          <>Able to create your own network which is managed via Winbox and Ruijie network for routers.</>
        ),
        images: [
          {
            src: '/images/projects/engineer/mikrotik.png',
            alt: 'Project image',
            width: 16,
            height: 9
        },
        {
            src: '/images/projects/engineer/router.png',
            alt: 'Project image',
            width: 16,
            height: 9
        },
        ],
      },
      {
        title: "Google Workspace",
        description: (
          <>Able to manage every student and teacher email, for teaching and learning purposes.</>
        ),
        images: [
          {
            src: "/images/projects/engineer/workspace.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
