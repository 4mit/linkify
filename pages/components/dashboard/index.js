import { useEffect, useState } from "react";
import VibhagLink from "../links/index";
import Nav from "../nav/index";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let ref = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(ref);
    };
  }, []);
  return (
    <main class="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
          <div class="bg-white h-full  dark:bg-gray-700 shadow-md">
            <Nav />
          </div>
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40 mt-2">
            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full"></div>
                <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <div className="mr-3 text-white">
                    {date.toLocaleDateString()}
                  </div>
                  <div className="text-white">
                    <span>
                      {date.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
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
    </main>
  );
};

export default Dashboard;
