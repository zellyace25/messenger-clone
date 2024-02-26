import { useEffect, useState } from "react";
import ChatHead from "./ChatHead";

function ChatList(props) {
  const [activeChat, setActiveChat] = useState(0);
  useEffect(() => {
    props.setProfile(users[0]);
  }, []);
  const updateProfile = (newProfile) => {
    props.setProfile(newProfile);
  };

  const users = [
    {
      name: "Daren Landicho",
      photo:
        "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/419895720_1534292130694481_6937194052504292992_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFrk-h4I0Pg6q9904B2OAC135cttUE3Rnrfly21QTdGertzgBK2M2Zqq4MYCUcidH9JpMLQNrQsJ_n1P2boNMdF&_nc_ohc=BUMpOXvmWyMAX9NGWTg&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfD0IjieRZCp_Wn5PALaEZDkVuXprCppB-7H7HWBhAMpcg&oe=65D9F3C9",
      received: [
        "Hi!",
        "I update the calendar and re-schedule your new hearing.",
      ],
      sent: [],
    },
    {
      name: "Paul Kenneth Solomon Quinto",
      photo:
        "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/394595735_3243884699248759_4079995997966701998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxeZZScM3aiSVJkHpIMPCjN3fo-8KNa1k3d-j7wo1rWdkHqMn8opEvWSdoXCmzj9a04KXHUF8qCA4K_6CkIGOc&_nc_ohc=GsoRsEz5NV8AX98rZtp&_nc_ht=scontent.fmnl3-2.fna&oh=00_AfBCLMbE75ttcYRTQxW85qjidXmVPob-cY4YelARKQyY7Q&oe=65D93F85",
      received: ["Good day!", "lorem"],
      sent: [],
    },
  ];

  return (
    <>
      <div className=" border-solid border-x-2 w-1/4 p-3 gap-3 flex flex-col h-screen">
        <div className="flex flex-col content-center w-full gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Chats</h1>
            <span className="material-symbols-outlined hover:bg-slate-200 bg-slate-100 p-2 rounded-full cursor-pointer">
              edit_square
            </span>
          </div>
          <div className="relative ">
            <input
              className="border-solid border-2 w-full pl-8 py-1 rounded-full focus:outline-none"
              type="text"
              placeholder="Search message"
            />
            <i className="fa fa-search absolute left-3 top-1/4 text-slate-300 "></i>
          </div>
        </div>
        <div className="bg-white-700 gap-1 flex flex-col overflow-auto  h-full">
          {users.map((user, i) => (
            <ChatHead
              key={i}
              activate={i === activeChat}
              setActiveChat={setActiveChat}
              profile={user.photo}
              name={user.name}
              received={user.received}
              sent={user.sent}
              updater={updateProfile}
              value={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatList;
