const EffectandFilter = () => {
  return (
    <div className="h-screen Parent">
      <div className="ml-11 mt-11 p-4 inline-block text-black bg-white border rounded-lg shadow-sm drop-shadow-3xl ">
        <img
          className="w-32 rounded-lg saturate-100"
          src="https://literature720019509.files.wordpress.com/2021/07/original-5367866-11053284021210448146.jpg"
        />
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is a paragraph</p>
        {/* <p className="mb-4 blur md:blur-lg">This is a paragraph</p> */}

        <button className="px-3 py-2 rounded-lg bg-cyan-500 cursor-pointer shadow-cyan-500/50 opacity-100">
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default EffectandFilter;

/**
 * mix blend mode
 *  <div className="flex mt-6 justify-center -space-x-9">
        <div className="p-4 pl-12 w-16 h-16 mix-blend-multiply bg-blue-400 rounded-full"></div>
        <div className="p-4 pr-12 w-16 h-16 mix-blend-multiply bg-pink-400 rounded-full"></div>
      </div>

      fiter
      saturate-100 or saturate-150	very usefull when images are not well designed
      grayscale hover:grayscale-0
      contrast-100 eg
      brightness-50 or hover

      hover animation
      transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
 */
