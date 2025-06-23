import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import OpenAccount from "../../../component/OpenAccount";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
    return (<>
      
       <Hero/>
       <Award/>
       {/* <Stats/> */}
       <Pricing/>
       <Education/>
       <OpenAccount/>
       
    </>  );
}

export default HomePage;