const AnimationTransition = () => {
  return (
    <div className="Parent h-screen">
      <div className="pt-11 pl-6">
        <button className="border rounded-lg bg-cyan-500 p-3 ring-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300">
          save changes
        </button>
      </div>
    </div>
  );
};

export default AnimationTransition;
