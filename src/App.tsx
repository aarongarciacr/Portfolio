import Education from "./components/Education";
import Greeting from "./components/LandingPage/Greeting";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Hobbies2 from "./components/Hobbies/Hobbies2";
import Contact from "./components/Contact/Contact";
import SocialLinks from "./components/SocialLinks";
import About from "./components/LandingPage/About";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <div className="relative">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Greeting />
        <About />
        <Education />
        <Portfolio />
        <Technologies />
        <Hobbies2 />
        <Contact />
        <SocialLinks />
      </ReactLenis>
    </div>
  );
}

export default App;
