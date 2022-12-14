import Inbox from "./components/Inbox";
import Navbar from "./components/Navbar";
import Emails from "./components/Emails";

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* L Sidebar */}
      {/* Inbox Section Start*/}
      <Inbox />
      {/* Email Section*/}
      <Emails />
      {/* R Sidebar */}
    </div>
  );
}

export default App;
