import { useEffect, useState } from "react";
const AppBar = () => {
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
    <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40">
      <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div class="container relative left-0 z-50 flex w-3/4">
            <h1 className="mr-3 text-xl text-white">Vibhag Yojna</h1>
          </div>
          <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
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
  );
};

export default AppBar;
