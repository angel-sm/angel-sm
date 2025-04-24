import Navbar from "./components/molecules/navbar/Navbar";
import Menu from "./components/molecules/menu/Menu";
import Presentation from "./sections/Presentation.section";
import MeSection from "./sections/Me.section";
import ExperienceSection from "./sections/Projects.section";
import SkillSection from "./sections/Skills.section";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar menu={<Menu />} />
      <div className="max-w-[80%] lg:max-w-[70%] md:max-w-[90%] m-auto">
        <Presentation />
        <MeSection />
        <ExperienceSection />
        <SkillSection />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FF3366"
          fill-opacity="1"
          d="M0,256L24,261.3C48,267,96,277,144,245.3C192,213,240,139,288,112C336,85,384,107,432,106.7C480,107,528,85,576,90.7C624,96,672,128,720,122.7C768,117,816,75,864,85.3C912,96,960,160,1008,176C1056,192,1104,160,1152,144C1200,128,1248,128,1296,144C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default App;
