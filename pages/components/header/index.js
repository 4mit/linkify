const TopNav = () => {
  return (
    <nav class="flex align-center space-x-4  bg-slate-700 text-white p-3">
      <div className="grow">
        <a
          href="/"
          class="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>

        <a
          href="/calander"
          class="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Calander
        </a>
      </div>

      <button className="font-bold justify-end">
        {new Date().toLocaleDateString()}
      </button>
    </nav>
  );
};

export default TopNav;
