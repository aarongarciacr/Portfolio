import { SwipeCarousel } from "./components/carousel";
import Education from "./components/Education";
import Greeting from "./components/Greeting";
import Hobbies from "./components/Hobbies";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Greeting />
      <Education />
      <Portfolio />
      <Technologies />
      <Hobbies />
      <SwipeCarousel />
      {/* <Contact /> */}
      {/* <Socials /> */}
    </>
  );
}

export default App;
