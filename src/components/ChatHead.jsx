import React from "react";

function ChatHead({
  profile,
  name,
  received,
  sent,
  updater,
  activate,
  value,
  setActiveChat,
}) {
  return (
    <>
      <div
        className={
          (activate ? "bg-slate-100" : "") +
          " flex items-center p-1 gap-2 rounded-lg cursor-pointer hover:bg-slate-100  focus:outline-none justify-start w-full"
        }
        onClick={() => {
          console.log(value);
          setActiveChat(value);
          const data = {
            name: name,
            photo: profile,
            received: received,
            sent: sent,
          };
          updater(data);
        }}
      >
        <div className="custom flex items-center justify-center">
          <img
            src={profile}
            className="rounded-full min-w-full min-h-full object-cover"
          />
        </div>
        <div className="h-full w-56 overflow-hidden">
          <h1 className="font-semibold truncate">{name}</h1>
          <h1 className="text-xs">{received[0]}</h1>
          {console.log(received)}
        </div>
      </div>
    </>
  );
}

export default ChatHead;
