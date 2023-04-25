const Grid = () => {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      {/* Auto flow */}
      <div className="container mx-auto py-6 gap-4 grid grid-cols-3 grid-rows-3 grid-flow-row-dense">
        <div className="p-6 bg-rose-400 col-span-2">01</div>
        <div className="p-6 bg-rose-400 col-span-2">02</div>
        <div className="p-6 bg-rose-600">03</div>
        <div className="p-6 bg-rose-400">04</div>
        <div className="p-6 bg-rose-400">05</div>
        <div className="p-6 bg-rose-400 col-span-2">06</div>
        <div className="p-6 bg-rose-400 col-span-2">10</div>
        <div className="p-6 bg-rose-400">11</div>
        <div className="p-6 bg-rose-400">12</div>
        <div className="p-6 bg-rose-400 col-span-2">13</div>
      </div>
    </div>
  );
};

export default Grid;

// responsive grid #impoe
// there is col-start and col-end for which col posotion we want show our grid view example eg: col-start-1
{
  /* <div className="grid gap-4 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4 md:grid-cols-2"> */
}

{
  /* <div className="grid gap-4 grid-flow-col grid-rows-3">
<div className="p-6 row-span-2 rounded-lg bg-sky-500">1</div>
<div className="p-6 rounded-lg bg-sky-500">2</div>
<div className="p-6 rounded-lg bg-sky-500">3</div>
<div className="p-6 rounded-lg bg-sky-500">4</div>
<div className="p-6 rounded-lg bg-sky-500">5</div>
<div className="p-6 rounded-lg bg-sky-500">6</div>
<div className="p-6 rounded-lg bg-sky-500">7</div>
<div className="p-6 row-span-3 rounded-lg bg-sky-500">8</div>
<div className="p-6 rounded-lg bg-sky-500">9</div>
<div className="p-6 rounded-lg bg-sky-500">10</div>
<div className="p-6 rounded-lg bg-sky-500">11</div>
<div className="p-6 rounded-lg bg-sky-500">12</div>
</div> */
}

{
  /* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-2 px-2">
          <div className="p-6 rounded-lg bg-sky-500">1</div>
          <div className="p-6 rounded-lg bg-sky-500">2</div>
          <div className="p-6 rounded-lg bg-sky-500">3</div>
          <div className="p-6 lg:col-span-2 md:col-span-2 rounded-lg bg-sky-500">
            4
          </div>
          <div className="p-6 rounded-lg bg-sky-500">5</div>
          <div className="p-6 rounded-lg bg-sky-500">6</div>
        </div> */
}
