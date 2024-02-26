import React, { useState } from "react";

function SentMessages({ singleChat }) {
  return (
    <>
      <div className="w-9/12 flex gap-2 justify-end">
        <h1 className="w-auto text-white bg-blue-500 rounded-3xl  px-5 py-1 flex justify-end text-base">
          {singleChat}
        </h1>
      </div>
    </>
  );
}

export default SentMessages;
