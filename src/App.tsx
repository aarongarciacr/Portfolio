import { SwipeCarousel } from "./components/carousel";
import Education from "./components/Education";
import Greeting from "./components/LandingPage/Greeting";
import Hobbies from "./components/Hobbies/Hobbies";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Hobbies2 from "./components/Hobbies/Hobbies2";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Greeting />
      <Education />
      <Portfolio />
      <Technologies />
      <Hobbies2 />
      <Contact />
      {/* <Socials /> */}
    </>
  );
}

export default App;
