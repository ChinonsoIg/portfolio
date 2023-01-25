import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import nextjs from "../public/assets/skills/nextjs.png";
import typescript from "../public/assets/skills/typescript.png";
import github from "../public/assets/skills/github.png";
import mongo from "../public/assets/skills/mongo.png";
import node from "../public/assets/skills/node.png";
import firebase from "../public/assets/skills/firebase.png";
import sales_and_inventory_management from "../public/assets/projects/sales_and_inventory_management.png";
import merchant_dashboard from "../public/assets/projects/merchant_dashboard.png";
import photo_grid from "../public/assets/projects/photo_grid.png";
import would_you_rather_game from "../public/assets/projects/would_you_rather_game.png";
import myreads_app from "../public/assets/projects/myreads_app.png";


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
  // { name: "HTML", img: html, id: "1" },
  // { name: "CSS", img: css, id: "2" },
  { name: "JavaScript",  img: javascript, id: "3" },
  { name: "React", img: react, id: "4" },
  { name: "NextJs", img: nextjs, id: "5" },
  { name: "TypeScript", img: typescript, id: "6" },
  { name: "NodeJs", img: node, id: "7" },
  { name: "MongoDB", img: mongo, id: "8" },
  { name: "GitHub", img: github, id: "9" },
  { name: "Firebase", img: firebase, id: "10" },
  // { name: "react_native", img: "", id: "11" },
];

export const projects = [
  {
    name: "Sales & Inventory Management System",
    img: sales_and_inventory_management,
    technology: "Next Js",
    url: "/sales-inventory",
    githubUrl: "",
    liveUrl: "",
    id: "1",
  },
  {
    name: "Merchant's Dashboard",
    img: merchant_dashboard,
    technology: "Next Js",
    url: "merchant-dashboard",
    githubUrl: "",
    liveUrl: "",
    id: "2",
  },
  {
    name: "Photo Grid App",
    img: photo_grid,
    technology: "Vue Js",
    url: "photo-grid",
    githubUrl: "",
    liveUrl: "",
    id: "3",
  },
  {
    name: "Would You Rather Game",
    img: would_you_rather_game,
    technology: "React Js",
    url: "would-you-rather",
    githubUrl: "",
    liveUrl: "",
    id: "4",
  },
  {
    name: "Myreads App",
    img: myreads_app,
    technology: "React Js",
    url: "myreads",
    githubUrl: "",
    liveUrl: "",
    id: "5",
  },
];
