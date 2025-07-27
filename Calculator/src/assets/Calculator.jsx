import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  function handleBtnClick(value) {
    return setInput((prev) => prev + value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    setInput("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the number here"
        />
        <div className="grid grid-cols-3   gap-2 m-1 p-2 bg-red-500">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleBtnClick(num)}
            >
                {num}
            </button>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
