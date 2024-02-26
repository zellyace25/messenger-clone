import React, { useState } from "react";
import RightOptions from "./RightOptions";

function RightNav(props) {
  const [mute, setMute] = useState(true);
  const options = [
    {
      category: "Chat info",
      option: [
        {
          listOption: "View pinned messages",
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              push_pin
            </span>
          ),
        },
      ],
    },
    {
      category: "Customize chat",
      option: [
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              edit
            </span>
          ),
          listOption: "Change chat name",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              image
            </span>
          ),
          listOption: "Change chat photo",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              contrast
            </span>
          ),
          listOption: "Change theme",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              mood
            </span>
          ),
          listOption: "Change emoji",
        },
      ],
    },

    {
      category: "Media, files, links",
      option: [
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              perm_media
            </span>
          ),
          listOption: "Media",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              description
            </span>
          ),
          listOption: "Files",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              link
            </span>
          ),
          listOption: "Links",
        },
      ],
    },
    {
      category: "Privacy & support",
      option: [
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              notifications_off
            </span>
          ),
          listOption: "Mute notifications",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              motion_photos_off
            </span>
          ),
          listOption: "Do not disturb",
        },
        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              block
            </span>
          ),
          listOption: "Block",
        },

        {
          icon: (
            <span className="material-symbols-outlined rounded-full bg-slate-100 p-1">
              warning
            </span>
          ),
          listOption: "Report",
        },
      ],
    },
  ];
  return (
    <>
      <div className="border-solid border-x-2 border-slate-200 w-1/5 flex flex-col h-screen overflow-scroll ">
        <div className="flex flex-col items-center p-5 gap-2 h-auto">
          <img src={props.data.photo} className="rounded-full h-20 w-20" />
          <h1 className="text-center font-semibold text-lg">
            {props.data.name}
          </h1>
          <div className="flex gap-5 m-3">
            <div
              className="flex flex-col items-center text-xs"
              onClick={() => {
                setMute((prevmute) => !prevmute);
              }}
            >
              <span className="material-symbols-outlined cursor-pointer hover:bg-slate-300 bg-slate-200 p-2 rounded-full">
                {mute ? "notifications" : "notifications_off"}
              </span>
              <h1>{mute ? "Mute" : "Unmute"}</h1>
            </div>
            <div
              className="flex flex-col items-center text-xs"
              onClick={() => {
                props.setSearch((prevSearch) => !prevSearch);
              }}
            >
              <span className="material-symbols-outlined cursor-pointer  hover:bg-slate-300 bg-slate-200 p-2 rounded-full">
                search
              </span>
              <h1>Search</h1>
            </div>
          </div>
        </div>
        <div>
          {/* option div */}
          <div className="p-2 h-full  w-full ">
            {options.map((item, i) => (
              <RightOptions
                key={i}
                category={item.category}
                option={
                  Array.isArray(item.option) ? (
                    <ul className="flex flex-col gap-1">
                      {item.option.map((subOption, subIndex) => (
                        <li
                          className="hover:bg-slate-100 rounded-lg "
                          key={subIndex}
                        >
                          <div className="flex gap-2 items-center ">
                            {subOption.icon}
                            <h1 className="text-sm">{subOption.listOption}</h1>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <h1 className="hover:bg-slate-100 rounded-lg p-2">
                      {item.option}
                    </h1> // If item.option is not an array, render it directly
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNav;
