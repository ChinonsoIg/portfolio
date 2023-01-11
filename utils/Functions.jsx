import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const navItems = [
  { name: "home", url: "/", id: "1" },
  { name: "about", url: "/about", id: "2" },
  { name: "skills", url: "/skills", id: "3" },
  { name: "projects", url: "/projects", id: "4" },
  { name: "contact", url: "/contact", id: "5" },
];

export const socials = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/chinonso-ojoechem/",
    id: "1",
  },
  {
    name: "twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/Chinonso_ig",
    id: "2",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/ChinonsoIg",
    id: "3",
  },
];

export const skills = [
  { name: "HTML", img: "/../public/assets/skills/html.png", id: "1" },
  { name: "CSS", img: "/../public/assets/skills/css.png", id: "2" },
  {
    name: "JavaScript",
    img: "/../public/assets/skills/javascript.png",
    id: "3",
  },
  { name: "React", img: "/../public/assets/skills/react.png", id: "4" },
  { name: "NextJs", img: "/../public/assets/skills/nextjs.png", id: "5" },
  { name: "NodeJs", img: "/../public/assets/skills/node.png", id: "6" },
  { name: "MongoDB", img: "/../public/assets/skills/mongo.png", id: "7" },
  { name: "GitHub", img: "/../public/assets/skills/github.png", id: "8" },
  // { name: "firebase", img: "/../public/assets/skills/firebase.png", id: "9" },
  // { name: "react_native", img: "/../public/assets/skills/react_native.png", id: "10" },
];

export const projects = [
  {
    name: "Sales & Inventory Management System",
    img: "/../public/assets/projects/sales_and_inventory_management.png",
    technology: "Next Js",
    url: "/sales-inventory",
    githubUrl: "",
    liveUrl: "",
    id: "1",
  },
  {
    name: "Merchant's Dashboard",
    img: "/../public/assets/projects/merchant_dashboard.png",
    technology: "Next Js",
    url: "merchant-dashboard",
    githubUrl: "",
    liveUrl: "",
    id: "2",
  },
  {
    name: "Trakk Website",
    img: "/../public/assets/projects/trakk_website.png",
    technology: "Next Js",
    url: "trakk-website",
    githubUrl: "",
    liveUrl: "",
    id: "3",
  },
  {
    name: "Zebrra Website",
    img: "/../public/assets/projects/zebrra.png",
    technology: "Next Js",
    url: "zebrra-website",
    githubUrl: "",
    liveUrl: "",
    id: "4",
  },
  {
    name: "Photo Grid App",
    img: "/../public/assets/projects/photo_grid.png",
    technology: "Vue Js",
    url: "photo-grid",
    githubUrl: "",
    liveUrl: "",
    id: "5",
  },
  {
    name: "Would You Rather Game",
    img: "/../public/assets/projects/would_you_rather_game.png",
    technology: "React Js",
    url: "would-you-rather",
    githubUrl: "",
    liveUrl: "",
    id: "6",
  },
  {
    name: "Myreads App",
    img: "/../public/assets/projects/myreads_app.png",
    technology: "React Js",
    url: "myreads",
    githubUrl: "",
    liveUrl: "",
    id: "7",
  },
];

