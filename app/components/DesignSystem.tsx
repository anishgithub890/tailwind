'use client';

import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const DesignSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectValue] = useState('Option 1');

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <h1 className="text-6xl font-bold mb-2">This is title</h1>
      <h2 className="text-2xl font-semibold mb-1">This is a subtitle</h2>
      <p className="text-base mb-2">This is a paragraph</p>
      <a
        href="www.google.com"
        className="underline decoration-wavy decoration-red-500 hover:text-rose-700 transition"
      >
        This is an anchor
      </a>
      <div className="mt-6">
        <button className="border border-black rounded-md p-1 bg-blue-500 ml-2 pl-1 hover:bg-rose-300 transition duration-300">
          this is a first button
        </button>
      </div>
      <div className="mt-2">
        <button className="border border-red-500 rounded-md p-1 bg-slate-400 ml-2 pl-1">
          this is a second button
        </button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="flex items-start my-6">
        <input
          type="checkbox"
          id="checkbox"
          className="border rounded-sm bg-slate-40 border-slate-500 ml-4 mt-4 px-1 bg-slate-100"
        />
        <label htmlFor="checkbox" className="leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          quibusdam maiores quod itaque eveniet iure, at labore aspernatur
          ratione similique, quam earum neque, in architecto culpa cupiditate
          quas ab? Excepturi.
        </label>
      </div>

      <div className="pl-4">
        <select className="border border-slate-700 p-2 pl-1 pr-4 rounded-md text-rose-700 bg-slate-200">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div>
        <input
          disabled
          placeholder="type email"
          className="border rounded-sm bg-slate-40 border-slate-500 outline-none ml-4 mt-4 px-1 disabled:bg-slate-100 placeholder:italic"
        />
      </div>
      <div>
        <input
          type="date"
          className="border rounded-sm p-2 ml-4 mt-2 border-slate-500 bg-slate-100 outline-none"
        />
      </div>
      <div className="border inline-block rounded-md p-2 mt-4 ml-4 transition outline-none cursor-pointer">
        <div
          className="child flex items-center mr-6 w-32 justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedValue}
          <div className={isOpen ? 'rotate-180' : 'rotate-0 transition'}>
            <AiOutlineDown className="text-rose-500 text-base" />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col divide-y border-t">
              <li className="child" onClick={() => updateValue('Option 1')}>
                Option 1
              </li>
              <li className="child" onClick={() => updateValue('Option 2')}>
                Option 2
              </li>
              <li className="child" onClick={() => updateValue('Option 3')}>
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignSystem;
