import About from "./components/About";
import Achievements from "./components/Achievements";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Objective from "./components/Objective";
import Reviews from "./components/Reviews";
import Services from "./components/Services";


const App = () => {
  return (
    <>

      <Navbar />
      <Home />
      <Map />
      <Services />
      <Objective />
      <Carousel />
      <Achievements />
      <Reviews />
      <About />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
