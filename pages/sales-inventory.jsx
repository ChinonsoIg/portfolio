import SingleProject from "../components/SingleProject";
import sales_and_inventory_management from "../public/assets/projects/sales_and_inventory_management.png";

const SalesInventory = () => {

  const details =
    <>
      The sales and inventory management system is used to keep record of purchases, sales, and invoices of transactions.
      When the user makes purchases, he enters the product name, the amount and the quantity purchased. This updates the quantity in the database.
      When sales are made, the user enters the product name, the price and the quantity sold. An invoice is generated, which can be printed out or downloaded as PDF. The quantity in the database is as well adjusted to reflect the sales.
      <br />
      <br />
      The app has different levels of roles and permissions. The highest level is the Super Admin. He has access to every aspect of the platform. He also has the authority to create other users, and give them access to specific parts of the app, or revoke it. For instance, a Sales Rep may have the permission to make purchases, but will be restricted from editing the price of the purchases.
      This app relieves businessmen of the hassle of tracking their inventory in realtime.
      <br />
      <br />
      By building this, I learnt how to elegantly render pages based on roles and permissions.
    </>

  const stacks = [
    { id: "1", name: "Next Js" },
    { id: "2", name: "Chakra UI" },
    { id: "3", name: "Node Js" },
  ];

  const technologies = [
    { id: "1", name: "Next Js" },
    { id: "2", name: "Context API" },
    { id: "3", name: "Chakra UI" },
    { id: "4", name: "Node Js" },
    { id: "5", name: "MySQL" }
  ];

  return (
    <SingleProject
      image={sales_and_inventory_management}
      title="Sales & Inventory Management System"
      details={details}
      liveURL=""
      githubURL=""
      stacks={stacks}
      technologies={technologies}
    />
  );
};

export default SalesInventory;
