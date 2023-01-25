import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import would_you_rather_game from "../public/assets/projects/would_you_rather_game.png";
import SingleProject from "../components/SingleProject";

const WouldYouRather = () => {

  const details =
    <>
      This is a version of the would you rather game. Users can ask questions and answer any question. For each question asked or answered, a score of 1 is given to the user. To see the score of all the users, you can click on the Leaderboard. <br />
      This was built with react and state management with redux toolkit. Through this app, I gained useful experience on redux State management.
    </>

  const stacks = [
    { id: "1", name: "Next Js" },
    { id: "2", name: "Redux Toolkit" },
    { id: "3", name: "Semantic UI" },
  ];

  const technologies = [
    { id: "1", name: "Next Js" },
    { id: "2", name: "Redux Toolkit" },
    { id: "3", name: "Semantic UI" },
  ];

  return (
    <SingleProject
      image={would_you_rather_game}
      title="Would You Rather Game"
      details={details}
      liveURL="https://chinonso-would-you-rather-game.netlify.app"
      githubURL="https://github.com/ChinonsoIg/would-you-rather-game-with-redux-toolkit"
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default WouldYouRather;
