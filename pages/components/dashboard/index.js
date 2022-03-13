import { useEffect, useState } from "react";
import VibhagLink from "../links/index";
import Nav from "../nav/index";
import AppBar from "../appbar";

const Dashboard = () => {
  return (
    <div class="h-screen overflow-hidden relative">
      <div class="flex items-start justify-between p-3">
        <div class="h-screen hidden lg:block shadow-lg relative w-80 ">
          <div class="h-full   shadow-md rounded">
            <Nav />
          </div>
        </div>
        <div class="flex flex-col w-full pl-0 md:pl-4 md:pt-2 md:space-y-4">
          <AppBar />
          <div class="overflow-auto h-screen pb-24 pt-2">
            <div class="flex flex-col flex-wrap sm:flex-row ">
              <div class="w-full">
                <div class="mb-4 mx-0 sm:ml-0 xl:mr-0">
                  <div class="shadow-lg  bg-white  w-full pb-5">
                    <p class="font-bold text-md p-4 text-black">
                      Website links
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
