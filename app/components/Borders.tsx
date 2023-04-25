const Borders = () => {
  return (
    <div className="Parent h-screen bg-slate-100">
      <div className="container">
        <div className="w-full border-b-8 p-4 py-4">Hello</div>
        <div className=" divide-y divide-slate-200">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <p className="mb-2">Email Address</p>
          <input className="rounded-md mb-6 p-2 border border-slate-500 hover:border-indigo-300"></input>
          <button className="flex flex-row ring-offset-2 ring-4 rounded-sm">
            Button C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Borders;
