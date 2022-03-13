import { useEffect, useState } from "react";
import VibhagLink from "../links/index";
import Nav from "../nav/index";
import AppBar from "../appbar";

const Dashboard = () => {
  return (
    <div class=" dark:bg-gray-800  h-screen overflow-hidden relative">
      <div class="flex items-start justify-between p-3">
        <div class="h-screen hidden lg:block shadow-lg relative w-80 ">
          <div class="bg-white h-full  dark:bg-gray-700 shadow-md rounded">
            <Nav />
          </div>
        </div>
        <div class="flex flex-col w-full pl-0 md:pl-4 md:pt-2 md:space-y-4">
          <AppBar />
          <div class="overflow-auto h-screen pb-24 pt-2">
            <div class="flex flex-col flex-wrap sm:flex-row ">
              <div class="w-full">
                <div class="mb-4 mx-0 sm:ml-0 xl:mr-0">
                  <div class="shadow-lg  bg-white dark:bg-gray-700 w-full">
                    <p class="font-bold text-md p-4 text-black dark:text-white">
                      Website links
                      <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                        (05)
                      </span>
                    </p>

                    <VibhagLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
