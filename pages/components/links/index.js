const links = [
  {
    title: "E-docket",
    link: "https://cgdigital.cgstate.gov.in/WCD/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Gov.mail",
    link: "https://email.gov.in/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Gmail",
    link: "https://mail.google.com",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Nan Rice and Wheat ",
    link: "https://parichay.nic.in/Accounts/NIC/index.html?service=EMANEC",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Pradhanmantri Matri Vandana Yojana",
    link: "https://pmmvy-cas.nic.in/BackOffice/useraccount/login",
    supprts: ["ie", "chrome"],
  },
  {
    title: "CM Darpan",
    link: "https://cmchhattisgarh.cgstate.gov.in/add-cdpo",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Suposhan Abhiyan",
    link: "https://shuposhitchhattisgarh.cgstate.gov.in/District_login/login.php",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Poshan Abhiyaan Gov. Dashbord",
    link: "http://monitoring.poshanabhiyaan.gov.in/login/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Noni Surkcha Yojana",
    link: "http://nonisuraksha.cgstate.gov.in/Default.aspx",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Collector Jan-chuopal",
    link: "https://janchaupal.cg.nic.in/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "TL",
    link: "https://cg.nic.in/durg/TL/Login.aspx",
    supprts: ["ie", "chrome"],
  },
  {
    title: "PFMS",
    link: "https://pfms.nic.in/NewDefaultHome.aspx",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Ekosh Online",
    link: "https://ekoshonline.cg.nic.in/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "Suposhit Bemetara",
    link: "https://cg.nic.in/durg/AWMSBEM1/Default.aspx",
    supprts: ["ie", "chrome"],
  },
  {
    title: "poshan tracker",
    link: "https://www.poshantracker.in/admin/",
    supprts: ["ie", "chrome"],
  },
  {
    title: "dbt",
    link: "https://wcd-dbtws.nic.in/portal/login",
    supprts: ["ie", "chrome"],
  },
  {
    title: "SHEBOX",
    link: "http://www.shebox.nic.in/organization/stateAdminLogin",
    supprts: ["ie", "chrome"],
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/",
    supprts: ["ie", "chrome"],
  },
];
const VibhagLink = () => {
  return (
    <div className="pb-5">
      <ul>
        {links.map((l, i) => {
          return (
            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-start text-sm">
                <span className="mx-4">{i + 1}</span>
                <span>
                  <a href={l.link} target="_blank">
                    {l.title}
                  </a>
                </span>
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
