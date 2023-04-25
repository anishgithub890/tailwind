const Layouts = () => {
  return (
    <div className="Parent h-screen bg-slate-500 text-white">
      <div className="container flex">
        <div className="bg-rose-500 rounded-full border-white p-4 z-40">01</div>
        <div className="bg-rose-500 rounded-full border-white p-4 z-30">02</div>
        <div className="bg-rose-500 rounded-full border-white p-4 z-20">03</div>
        <div className="bg-rose-500 rounded-full border-white p-4 z-10">04</div>
      </div>
    </div>
  );
};

export default Layouts;

// absolute top-0 left-0 bg-green-500 w-24 h-24 rounded-lg

/** dealing with image and text
 * \
 *  <img
          className="w-32 float-left rounded-md"
          src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000020033/df825d5fc6747b66b051f5d3ba6a412fe625ea7878b6a10c93bb8312195682b1"
          alt=""
        />
        <img
          className="w-64 float-right rounded-2xl"
          src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000020033/df825d5fc6747b66b051f5d3ba6a412fe625ea7878b6a10c93bb8312195682b1"
          alt=""
        />

        // hidden

        <div className="container grid grid-cols-3 gap-4">
        <div className="bg-red-500 p-4">01</div>
        <div className="bg-green-500 p-4 invisible">02</div>
        <div className="bg-blue-500 p-4">03</div>
      </div>


        <div className="text-white Parent bg-slate-900 h-screen">
      <div className="container py-2">
        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32">
          <div className="absolute bg-green-500 w-24 h-24 rounded-lg inset-2"></div>
        </div>
      </div>
    </div>
        
 * <div className="container py-4 columns-lg">
        <img
          src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000020033/df825d5fc6747b66b051f5d3ba6a412fe625ea7878b6a10c93bb8312195682b1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          laboriosam? Tenetur unde voluptatum officiis dignissimos ex adipisci
          suscipit ipsum aspernatur repellendus architecto, tempore, error
          omnis? Ipsa repellendus pariatur aperiam assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          laboriosam? Tenetur unde voluptatum officiis dignissimos ex adipisci
          suscipit ipsum aspernatur repellendus architecto, tempore, error
          omnis? Ipsa repellendus pariatur aperiam assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          laboriosam? Tenetur unde voluptatum officiis dignissimos ex adipisci
          suscipit ipsum aspernatur repellendus architecto, tempore, error
          omnis? Ipsa repellendus pariatur aperiam assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          laboriosam? Tenetur unde voluptatum officiis dignissimos ex adipisci
          suscipit ipsum aspernatur repellendus architecto, tempore, error
          omnis? Ipsa repellendus pariatur aperiam assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          laboriosam? Tenetur unde voluptatum officiis dignissimos ex adipisci
          suscipit ipsum aspernatur repellendus architecto, tempore, error
          omnis? Ipsa repellendus pariatur aperiam assumenda.
        </p>
      </div>
 */
