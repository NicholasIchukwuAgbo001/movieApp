import NavBar from "../components/navBar/NavBar"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router"

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex flex-1">
        <Sidebar />
        
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};


export default AppLayout
