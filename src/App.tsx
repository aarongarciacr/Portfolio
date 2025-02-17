import { SwipeCarousel } from "./components/carousel";
import Education from "./components/Education";
import Greeting from "./components/LandingPage/Greeting";
import Hobbies from "./components/Hobbies/Hobbies";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Hobbies2 from "./components/Hobbies/Hobbies2";

function App() {
  return (
    <>
      <Greeting />
      <Education />
      <Portfolio />
      <Technologies />
      <Hobbies />
      <Hobbies2 />
      {/* <SwipeCarousel /> */}
      {/* <Contact /> */}
      {/* <Socials /> */}
    </>
  );
}

export default App;
