import NavBar from "../components/navBar/NavBar"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router"


const AppLayout = () => {
  return (
    <div className="flex flex-col bg-gray-200">
      <NavBar />

      <div className="flex flex-1">
        <aside className="w-64  bg-red-300">
          <Sidebar />
        </aside>

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout
