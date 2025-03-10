import AnnouncementBar from "./Components/AnnouncementBar";
import NavBar from "./Components/NavBar"; 
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Grid from "./Components/Grid";
import Amenities from "./Components/Amenities";
import Events from "./Components/Events";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-black text-white">
        <AnnouncementBar />
      </div>
      <main>
        <NavBar />
        <Hero id="hero" />
        <AboutUs id="about-us" />
        <Grid id="grid" />
        <Amenities id="amenities" />
        <Events id="events" />
        <Reviews id="reviews" />
        <Contact id="contact" />
      </main>
    </div>
  );
};

export default App;
