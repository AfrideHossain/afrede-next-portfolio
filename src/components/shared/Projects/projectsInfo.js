import ApertureAcademyImg from "@/assets/projects-ss/aperture-academy.png";
import FuudVerseImg from "@/assets/projects-ss/fuudverse.png";
import MarvelToyVerseImg from "@/assets/projects-ss/marvel-toyverse.png";
import MaryHardyImg from "@/assets/projects-ss/mary-hardy.png";
import NewYearNewMeImg from "@/assets/projects-ss/new-year-new-me.png";

export const projectsData = [
  {
    id: 1,
    name: "Aperture Academy",
    description:
      "'Aperture Academy' is a photography learning website. It includes separate dashboards for students, instructors, and admins. Data management is handled through MongoDB, while React Hook Form ensures effective user input validation. Enhance your photography skills with Aperture Academy's comprehensive resources.",
    techStack: [
      "react",
      "tailwindcss",
      "daisyUI",
      "firebase",
      "jwt",
      "expressJS",
      "mongoDB",
      "nodeJS",
    ],
    image: ApertureAcademyImg,
    liveLink: "https://apertureacademy.netlify.app/",
    frontendCode: "https://github.com/AfrideHossain/ApertureAcademy-client",
    backendCode: "https://github.com/AfrideHossain/ApertureAcademy-server",
  },
  {
    id: 2,
    name: "Marvel Toyverse",
    description:
      "'Marvel Toyverse' is an online platform for purchasing toys. Its frontend, developed using ReactJS and DaisyUI, offers a visually engaging interface. Google authentication ensures easy login, while JSON Web Token provides secure user validation. Find and buy a wide range of toys on Marvel Toyverse.",
    techStack: [
      "react",
      "tailwindcss",
      "daisyUI",
      "firebase",
      "jwt",
      "expressJS",
      "nodeJS",
    ],
    image: MarvelToyVerseImg,
    liveLink: "https://merveltoyverse.netlify.app/",
    frontendCode: "https://github.com/AfrideHossain/MervelToyverse-client",
    backendCode: "https://github.com/AfrideHossain/MervelToyverse-server",
  },
  {
    id: 3,
    name: "Fuudverse",
    description:
      "'FuudVerse' is a food website with a vast collection of recipes. Its frontend is built using ReactJS and TailwindCSS, offering a modern interface. Firebase integration enables secure authentication, and react-toastify provides convenient toast notifications. Discover new recipes and explore diverse cuisines with FuudVerse.",
    techStack: ["react", "tailwindcss", "firebase", "expressJS", "nodeJS"],
    image: FuudVerseImg,
    liveLink: "https://fuudverse.web.app/",
    frontendCode: "https://github.com/AfrideHossain/FuudVerse-client",
    backendCode: "https://github.com/AfrideHossain/FuudVerse-server",
  },
  {
    id: 4,
    name: "New Year New Me",
    description:
      "'New Year New Me' is a website built using HTML and CSS, focusing on the concept of starting fresh and making positive changes during the new year. The website likely features various sections and content related to personal growth, motivation, goal setting, and self-improvement.",
    techStack: ["html", "css", "javascript"],
    image: NewYearNewMeImg,
    liveLink: "https://afridehossain.github.io/newYearNewMe/",
    frontendCode: "https://github.com/AfrideHossain/newYearNewMe",
    backendCode: "", //temporary should remove later
  },
  {
    id: 5,
    name: "Developer Portfolio",
    description:
      "'Developer Portfolio' is a website built exclusively with HTML and CSS, showcasing the work and skills of a developer. The website is designed to serve as a professional portfolio to highlight the developer's projects, experience, and expertise.",
    techStack: ["html", "css", "javascript"],
    image: MaryHardyImg,
    liveLink: "https://afridehossain.github.io/dev-portfolio/",
    frontendCode: "https://github.com/AfrideHossain/dev-portfolio",
    backendCode: "", //temporary should remove later
  },
];
