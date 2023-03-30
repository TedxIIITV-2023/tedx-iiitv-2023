import {
  meta,
  // starbucks,
  tesla,
  shopify,
  nandini1,
  DSC05028,
  blackbg
} from "../assets";


export const navLinks = [
  {
    id: "/",
    title: "Home"
  },
  {
    id: "aboutUs",
    title: "About Us",
  },
  {
    id: "speakers",
    title: "Speakers",
  },
  {
    id: "teams",
    title: "Team",
  },
];




const experiences = [
  {
    title: "Inauguration",
    company_name: "",
    icon: blackbg,
    iconBg: "#FF0000",
    date: "8-April 2023",
    points: [
     ""
    ],
  },
  {
    title: "Speaker 1",
    company_name: "",
    icon: blackbg,
    iconBg: "#FF0000",
    date: "8-April 2023",
    points: [
     "Some random Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
  },
  {
    title: "Speaker 2",
    company_name: "",
    icon: blackbg,
    iconBg: "#FF0000",
    date: "8-April 2023",
    points: [
     "Some Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. stuffs"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The theme 'Unleash Your Passion' inspires people to explore their passions, hobbies, and aspirations and to start working towards their goals. Passion is a powerful motivator that drives individuals toward achieving their objectives with commitment and dedication. It serves as the incentive for individuals to overcome challenges and succeed in their chosen professions.",
    p1: "The subject emphasizes the important role of discovering one's true calling and pursuing it tortuously. Those that are passionate about what they do are more likely to be original, creative, and successful. People with passion can push themselves above their comfort zones and venture into uncharted waters, frequently leading to innovations and discoveries.",
    p2: "In summary, the theme 'Unleash Your Passion' holds a crucial role in the modern era by encouraging individuals to pursue their interests, find purpose and meaning in their lives, and drive innovation and progress in various fields.",
    name: "Our Theme",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "TEDxIIIT Vadodara is a globally-minded local community, welcoming people from every discipline and culture who seek a deeper understanding of the world. This growing group of curious individuals engage with ideas and each other, both online and at live events, all year long.",
  //   name: " Community",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "Long enough to explore a challenging perspective but short enough to read in a single sitting, our online channels pick up where Talks leave off. Discover new ideas every day in our Online Magazine, our Social Media and our Noteworthy Newsletter.",
  //   name: "Online",
  //   designation: "",
  //   company: " ",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const speakers = [
  {
    name: "Nandini Agrawal",
    description:
      "BCG | National Record Holder | CA - AIR 1 | AIR 31  | Ex-PwC",
       
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nandini1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Anuj Kumar Sharma",
    description:
      "Youtuber | Ex-Amazon, Ex-Urban Company | Educator | Founder Coding Shuttle",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: DSC05028,
    source_code_link: "https://github.com/",
  },
  
];

export {  experiences, testimonials, speakers, };
