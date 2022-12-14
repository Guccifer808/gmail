import Inbox from "./components/Inbox";
import Navbar from "./components/Navbar";
import Emails from "./components/Emails";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* L Sidebar */}
      <div className="flex">
        <LeftSideBar />
        {/* Inbox Section Start*/}
        <div className="w-full">
          <Inbox />
          {/* Email Section*/}
          <Emails />
          {/* R Sidebar */}
        </div>
      </div>
    </div>
  );
}

export default App;
