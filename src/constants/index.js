import {
  meta,
  starbucks,
  tesla,
  shopify,
  nandini1,
  DSC05028,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Speakers",
  },
  {
    id: "contact",
    title: "Team",
  },
];




const experiences = [
  {
    title: "ABCD",
    company_name: "HUEHUE",
    icon: starbucks,
    iconBg: "#FF0000",
    date: "8-April 2023",
    points: [
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
  },
  {
    title: "ABCD",
    company_name: "HUEHUE",
    icon: starbucks,
    iconBg: "#FF0000",
    date: "8-April 2023",
    points: [
     "Some random Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
  },
  {
    title: "ABCD",
    company_name: "HUEHUE",
    icon: starbucks,
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
      "Our mission is to inspire and inform by unleashing hidden, groundbreaking and unique ideas worth spreading from all over the world. We host conferences with live TEDxTalks and cover a diversity of topics, ranging from technology, entertainment & design to science, art & global issues.",
    name: "Events",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "TEDxIIIT Vadodara is a globally-minded local community, welcoming people from every discipline and culture who seek a deeper understanding of the world. This growing group of curious individuals engage with ideas and each other, both online and at live events, all year long.",
    name: " Community",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Long enough to explore a challenging perspective but short enough to read in a single sitting, our online channels pick up where Talks leave off. Discover new ideas every day in our Online Magazine, our Social Media and our Noteworthy Newsletter.",
    name: "Online",
    designation: "",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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

export {  experiences, testimonials, speakers };
