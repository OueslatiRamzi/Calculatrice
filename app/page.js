'use client';
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="mx-auto overflow-hidden mt-10 mb-2 bg-purple-900 shadow-lg border rounded-lg md:w-3/6 sm:w-4/6">
      <div className="p-5 text-white text-center text-3xl bg-purple-900">
        <span className="text-orange-500">Calcu</span>lator
      </div>
      <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">{input || "0"}</div>
      <div className="p-5 text-white text-right text-3xl bg-purple-800">= <span className="text-orange-500">{result || ""}</span></div>
      {[
        ["%", "(", ")", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["C", "0", ".", "="],
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-stretch bg-purple-900 h-24">
          {row.map((btn) => (
            <button
              key={btn}
              className={`flex-1 px-2 py-2 text-white text-2xl font-semibold rounded-full h-20 w-20 flex items-center justify-center bg-purple-800 shadow-lg border-2 border-purple-700 hover:border-gray-500 focus:outline-none ${btn === "=" ? "bg-orange-500" : ""}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
