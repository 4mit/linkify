import { links } from "./config";

const VibhagLink = () => {
  return (
    <div>
      <ul>
        {links.map((l, i) => {
          return (
            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-start text-sm">
                <span className="mx-4">
                  {i}
                  {i + 1}
                </span>
                <span>{l.title}</span>
              </div>
              <div className="flex flex-row justify-end text-sm mr-3">
                <ul className="flex justify-between">
                  {l.supprts.map((s, idx) => {
                    return (
                      <li className="p-3 border border-sky-500 rounded mr-1">
                        <a href={l.link} target="_blank">
                          {s}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VibhagLink;
