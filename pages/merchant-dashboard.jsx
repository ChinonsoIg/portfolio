import merchant_dashboard from "../public/assets/projects/merchant_dashboard.png";
import SingleProject from "../components/SingleProject";

const MerchantDashboard = () => {

  const details = 
    <>
      This is a data heavy app - the dashboard for my E-commerce web application. It displays operational information and statistics about the company. It contains information about their products and the number of sales they've made. There is also a form to upload a new product, or edit an existing one. <br />
      This app is built with NextJs, Javacript, Sass, and tested with React Testing Library. The backend was also built by me using Node.js, Express and MongoDB.
    </>

    const stacks = [
      { id: "1", name: "Next Js" },
      { id: "2", name: "Sass" },
    ];

    const technologies = [
      { id: "1", name: "Next Js" },
      { id: "2", name: "Sass" },
      { id: "4", name: "Next Auth" },
      { id: "4", name: "React Testing Library" }
    ];

  return (
    <SingleProject
      image={merchant_dashboard}
      title="E-commerce Merchant Dashboard"
      details={details}
      liveURL="https://female-suave-merchants.vercel.app/"
      githubURL="https://github.com/ChinonsoIg/female-suave-merchants"
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default MerchantDashboard;
