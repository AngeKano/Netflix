import Nav from "./components/Nav";
import Modeleconomique from "./components/Modeleconomique";
import Ressorteconomie from "./components/Ressorteconomie";
import UniversConcu from "./components/UniversConcu";
import Grille from "./components/Grille";
import Controverse from "./components/Controverse";
import Solution from "./components/Solution";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Finals from "./components/Finals";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Modeleconomique />
      <Ressorteconomie />
      <UniversConcu />
      <Grille />
      <Controverse />
      <Solution />
      <Stats />
      <Finals />
      <SpeedInsights />
      <div className="absolute -z-6 top-[68%] -right-[35%] w-[62rem] h-[62rem] rounded-full bg-[url('/gradient/elips5.webp')] bg-cover"></div>
      <p className="text-black">Ange Kano</p>
    </>
  );
}

export default App;
