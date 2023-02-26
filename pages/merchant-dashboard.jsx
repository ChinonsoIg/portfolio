import merchant_dashboard from "../public/assets/projects/merchant_dashboard.png";
import SingleProject from "../components/SingleProject";

const MerchantDashboard = () => {

  const details = 
    <>
      This is a data heavy app - the dashboard for the Trakk logistics app. It displays operational information and statistics about the company. It contains information about their riders, their vehicles, and all deliveries. There is also a feature to suspend and unsuspend a rider, and to set price for trips (done through some calculations depending on the distance and traffic situation). <br />
      On the home page, you'll see a lot of pie charts, done with Recharts.
      This app was built with NextJs, Typescript, GraphQL Chakra UI, and a Strapi backend. <br />
      I gained hands-on experience on the techniques of data fetching using GraphQL, and data display using Recharts.
    </>

    const stacks = [
      { id: "1", name: "Next Js" },
      { id: "2", name: "Chakra UI" },
      { id: "3", name: "TypeScript" },
    ];

    const technologies = [
      { id: "1", name: "Next Js" },
      { id: "2", name: "Chakra UI" },
      { id: "3", name: "TypeScript" },
      { id: "4", name: "Context API" },
      { id: "5", name: "GraphQL" }
    ];

  return (
    <SingleProject
      image={merchant_dashboard}
      title="Merchant Dashboard"
      details={details}
      liveURL=""
      githubURL=""
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default MerchantDashboard;
