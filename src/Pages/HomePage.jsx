import Content from "../Components/Content";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";

export default function HomePage(){
    return(
        <div className="home-page-section">
           <Navbar/>
           <Filter/>
           <Content/>
           

        </div>
    )
}