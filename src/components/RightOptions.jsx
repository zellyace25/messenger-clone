import React, { useState } from "react";

function RightOptions({ category, option }) {
  const [arrow, setArrow] = useState(true);
  return (
    <>
      <div
        className={`flex justify-between w-full h-auto px-5 py-2 ${
          arrow ? "hover:bg-slate-100" : ""
        } cursor-pointer rounded-lg font-semibold`}
        onClick={() => setArrow((prevArrow) => !prevArrow)}
      >
        <div className="flex flex-col w-full h-auto">
          <h1>{category}</h1>
          {!arrow && <h1 className="">{option}</h1>}
        </div>
        <span className="material-symbols-outlined">
          {arrow ? "chevron_right" : "expand_more"}
        </span>
      </div>
    </>
  );
}

export default RightOptions;
