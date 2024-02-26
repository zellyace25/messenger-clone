import "./App.css";
import ChatList from "./components/ChatList";
import LeftNav from "./components/LeftNav";
import MessageContainer from "./components/MessageContainer";
import RightNav from "./components/RightNav";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState({});
  const [showRight, setShowRight] = useState(true);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <>
      <div className="flex max-w-screen h-screen overflow-hidden overscroll-none">
        <LeftNav />
        <ChatList setProfile={setProfile} />
        <MessageContainer setShowRight={setShowRight} data={profile} search={search} setSearch={setSearch}/>
        {showRight && <RightNav data={profile} setSearch={setSearch}/>}
      </div>
    </>
  );
}

export default App;
