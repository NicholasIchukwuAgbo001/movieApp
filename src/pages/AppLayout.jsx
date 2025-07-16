import NavBar from "../components/navBar/NavBar"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
import Movie from "../components/moviePage/Movie"


const AppLayout = () => {
  return (
    <div>
        <NavBar />
        <div>
            <Sidebar />
            <Movie />
        </div>
        <Footer />
    </div>
  )
}

export default AppLayout
