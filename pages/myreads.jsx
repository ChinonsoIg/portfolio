import myreads_app from "../public/assets/projects/myreads_app.png";
import SingleProject from "../components/SingleProject";

const MyReads = () => {

  const details = 
  <>
    This was an assessment for my Udacity React Nanodegree program. The user can select any book from a library of books, and add it to his book list - either as Read, Currently reading or Want to read. If he navigates back to the library, the state of any book in the library that he as well has in his list should be the same. The state management was done purely with reacts usestate hook; no external library. <br />
    I learnt how to effectively manage state from a parent component using the usestate hook.
  </>

  const stacks = [
    { id: "1", name: "React Js" },
  ];

  const technologies = [
    { id: "1", name: "React Js" },
    { id: "2", name: "CSS" },
  ];

  return (
    <SingleProject
      image={myreads_app}
      title="MyReads App"
      details={details}
      liveURL="https://chinonso-myreads-app.netlify.app"
      githubURL="https://github.com/ChinonsoIg/myreads"
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default MyReads;
