import NavBar from "../components/navBar/NavBar"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
import Movie from "../components/moviePage/Movie"
import { Outlet } from "react-router"


const AppLayout = () => {
  return (
    <div>
        <NavBar />
        <div>
            <Sidebar />
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default AppLayout
