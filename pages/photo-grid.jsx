import photo_grid from "../public/assets/projects/photo_grid.png";
import SingleProject from "../components/SingleProject";

const PhotoGrid = () => {

  const details =
    <>
      This sleek UI uses unsplash API to display images of different sizes in columns. When an image is clicked, it will show a pop-up displaying the full image. I took advantage of skeleton loader to present my user with the best UI experience. <br />
      You can search for pictures of any city/place from around the world.
      I built this with Vue Js and pure CSS.
    </>

  const stacks = [
    { id: "1", name: "Vue Js" },
  ];

  const technologies = [
    { id: "1", name: "Vue Js" },
    { id: "2", name: "CSS3" },
  ];

  return (
    <SingleProject
      image={photo_grid}
      title="Photo Grid App"
      details={details}
      liveURL="https://unsplash-photo-grid.netlify.app"
      githubURL="https://github.com/ChinonsoIg/photo-grid"
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default PhotoGrid;
