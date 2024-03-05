import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/Finals.mp3"));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
  }, []);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "./background/img2.jpg",
    "./background/img3.jpg",
    "./background/img4.jpg",
  ];

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
    <div
      className="flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat relative transition-all ease h-screen
    after:content-[''] after:w-full after:h-10  after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-80% after:via-transparent after:to-black  after:z-10"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <audio ref={audioRef} src="/audio/Finals.mp3"></audio>
      <img src="./logos/NetflixLogo2.png" width={400} alt="" />
      <span className="text-3xl text-white font-medium font-gotham">
        Redéfinir le Divertissement à l'Ère du Numérique
      </span>
      <button
        onClick={togglePlayPause}
        className=" flex flex-row gap-2 font-medium font-gotham mt-10 px-7 py-3 items-center rounded-full bg-white"
      >
        <img src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"} alt="" />
        <span>Découvrir</span>
      </button>
    </div>
  );
};

export default Banner;
