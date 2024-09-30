import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-72">
        <SideBar />
      </div>
      <div className="w-2">
        <MainContent />
      </div>
    </div>
  );
}
