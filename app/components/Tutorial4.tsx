const Tutorial4 = () => {
  return (
    <div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>Sidebar</div>
          <div>
            <h1 className="font-bold text-2xl">Main Contain</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              excepturi non qui nulla animi, eos soluta provident laudantium,
              dolor id dolorum quam? Omnis modi mollitia temporibus error
              ducimus dolorem voluptatem! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat ab culpa necessitatibus distinctio in
              quaerat, deleniti reprehenderit exercitationem praesentium
              temporibus, natus, qui impedit vitae. Aspernatur voluptate
              possimus exercitationem animi maxime?
            </p>
          </div>
          <div>Sidebar</div>
        </div>
        {/* <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-wrap">
            <div className="w-32 grow">01</div>
            <div className="w-32 grow">02</div>
            <div className="w-32 grow">03</div>
            <div className="w-32 grow">04</div>
            <div className="w-32 grow">05</div>
            <div className="w-32 grow">06</div>
          </div>
        </div> */}
        {/* <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-32 bg-green-500">Sidebar</div>
          <div className="w-full bg-red-600">Main Contain</div>
        </div> */}
        {/* <div className="flex">
          <div className="grow">Main Contain</div>
          <div className="flex flex-col">
            <div>Sidebar</div>
          </div>
        </div> */}
      </div>
      {/* <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="flex flex-row-reverse">
          <div className="col-span-2">01</div>
          <div className="col-span-2">02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
      </div> */}
    </div>
  );
};
export default Tutorial4;
{
  /* <div className="w-16 h-  16 bg-red-500">me</div>
      <div className="w-16 h-16 bg-green-500">me</div> */
}
