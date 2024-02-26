import React from "react";

function ReceivedMessages({ message }) {
  return (
    <>
      <div className="w-9/12 flex gap-2">
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default ReceivedMessages;
