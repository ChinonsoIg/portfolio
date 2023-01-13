import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import sales_and_inventory_management from "../public/assets/projects/sales_and_inventory_management.png";

const SalesInventory = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={sales_and_inventory_management}
          alt="Sales and inventory management"
          className="absolute z-1 object-cover"
          fill
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">Sales & Inventory Management System</h2>
          <h3>Next Js / Chakra UI / Node Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="text-justify">
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

          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button> */}
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-col-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Context API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Chakra UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Node Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                MySQL
              </p>
            </div>
          </div>
        </div>

        <p className="underline cursor-pointer py-10 w-max">
          <Link href="/#projects">Back</Link>
        </p>
      </div>
    </div>
  );
};

export default SalesInventory;
