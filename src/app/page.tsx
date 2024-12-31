'use client'
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); 

  
  useEffect(() => {
    console.log(`Count is updated: ${count}`);
  }, [count]); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 poppins">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Counter App</h1>
      <p className="text-2xl text-gray-700 mb-6">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className={`px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition ${
            count <= 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCount(count - 1)}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button
          className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}






