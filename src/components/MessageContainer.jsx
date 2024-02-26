import React, { useState } from "react";
import ReceivedMessages from "./ReceivedMessages";
import SentMessages from "./SentMessages";

function MessageContainer(props) {
  const [expand, setExpand] = useState(false);
  const [chat, setChat] = useState("");
  const [handleChat, setHandleChat] = useState([]);
  const [clickSend, setClickSend] = useState(false);

  const handleSend = () => (
    setClickSend(true), setChat(""), setHandleChat([...handleChat, chat])
  );

  return (
    <>
      <div className="border-solid border-x-1 border-slate-200 w-1/2 flex flex-col grow">
        <div className="bg-slate-100 h-16 flex items-center px-3 py-5 gap-3">
          <div className="w-1/2 gap-2 flex items-center">
            <img src={props.data.photo} className="rounded-full w-10 h-10" />
            <h1 className="font-semibold">{props.data.name}</h1>
          </div>

          <div className="w-1/2 justify-end flex  gap-3">
            <span className="material-symbols-outlined cursor-pointer  hover:bg-slate-300  p-2 rounded-full">
              add_circle
            </span>
            <span
              className="material-symbols-outlined cursor-pointer  hover:bg-slate-300  p-2 rounded-full mr-2"
              onClick={() => {
                props.setShowRight((show) => {
                  return !show;
                });
                setExpand((prev) => !prev);
              }}
            >
              {expand ? "more_horiz" : "pending"}
            </span>
          </div>
        </div>

        {/* search area */}
        {props.search && (
          <div className="w-full border-solid border-2 border-slate-100 h-16 flex items-center p-2 relative gap-5">
            <input
              className="border-solid border-2 w-full pl-8 py-1 rounded-full focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <i className="fa fa-search absolute left-5 top-auto text-blue-500 "></i>
            <button
              className="bg-slate-100 px-3 py-2 rounded-md hover:bg-slate-200"
              onClick={() => props.setSearch(!props.search)}
            >
              Close
            </button>
          </div>
        )}

        {/* message container */}
        <div className=" h-full w-full p-5 gap-2 flex flex-col overflow-auto">
          <div className="gap-2 flex">
            <img
              src={props.data.photo}
              className="rounded-full w-8 h-8 self-end"
            />
            <div className="flex flex-col gap-2 w-full">
              {[props.data.received].map((receive, i) => (
                <ReceivedMessages
                  key={i}
                  message={
                    Array.isArray(receive) ? (
                      <ul className="flex flex-col gap-1">
                        {receive.map((receiveItem, i) => (
                          <li
                            className="bg-slate-200 rounded-2xl px-5 py-1 text-base w-fit "
                            key={i}
                          >
                            {receiveItem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="gap-2 flex flex-col w-full items-end">
            {clickSend &&
              handleChat.map((singleChat, i) => (
                <SentMessages key={i} singleChat={singleChat} />
              ))}
          </div>
        </div>

        <div className=" flex gap-3 justify-content-end h-16 items-center px-7">
          <span className="material-symbols-outlined flex items-center cursor-pointer  hover:bg-slate-100  p-2 rounded-full">
            add_circle
          </span>

          <div className="w-full h-full flex items-center py-3 relative ">
            <input
              type="text"
              value={chat}
              className="h-full rounded-full w-full bg-slate-200 focus:outline-none px-5 py-2 "
              placeholder="Aa"
              onKeyDown={(event) => (event.key === "Enter" ? handleSend() : "")}
              onChange={(e) => setChat(e.target.value)}
            />
            <span
              className="material-symbols-outlined absolute right-5  m-auto cursor-pointer "
              onClick={handleSend}
            >
              send
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageContainer;
