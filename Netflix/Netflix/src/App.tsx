import { useEffect, useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "./public/background/img2.jpg",
    "./public/background/img3.jpg",
    "./public/background/img4.jpg",
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      prevImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Nav />
      <div
        className="flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat relative transition-all ease h-screen 
          after:content-[''] after:w-full after:h-10  after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-80% after:via-transparent after:to-black  after:z-10
        "
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        {/* <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          Next
        </button> */}
        <img src="./src/assets/logos/NetflixLogo2.png" width={400} alt="" />
        <span className="text-3xl text-white font-medium font-gotham">
          Redéfinir le Divertissement à l'Ère du Numérique
        </span>
        <a className=" flex flex-row gap-2 font-medium font-gotham mt-10 px-7 py-3 rounded-full bg-white">
          <img src="./public/svg/play.svg" alt="" />
          <span>Découvrir</span>
        </a>
      </div>
      <section className="text-white  h-screen">per,ssdqssdds,d</section>
    </>
  );
}

export default App;
