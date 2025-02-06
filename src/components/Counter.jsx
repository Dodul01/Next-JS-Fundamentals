"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center bg-[#242424] h-screen w-full">
      <div className="flex items-center justify-center gap-8 flex-col bg-[#323232] h-[50vh] w-[50vw] shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center">Counter App</h1>
        <h1 className="text-7xl font-semibold">{count}</h1>
        <div className=" flex items-center justify-between gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="text-2xl bg-blue-600 h-10 w-10 rounded-full shadow-2xl text-center"
          >
            +
          </button>
          <button
            onClick={() => setCount(0)}
            className="text-2xl bg-blue-600 h-10 w-10 rounded-full shadow-2xl text-center"
          >
            ⟳
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="text-2xl bg-blue-600 h-10 w-10 rounded-full shadow-2xl text-center"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
