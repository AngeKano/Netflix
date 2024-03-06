import { useEffect, useRef, useState } from "react";

const Modeleconomique = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/lofi.mp3"));

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
  return (
    <section
      id="Modeleconomique"
      className="text-white h-screen flex flex-row items-center justify-around px-[14%]  "
    >
      <div className="relative ">
        <audio ref={audioRef} src="/audio/lofi.mp3"></audio>
        <img src="./logos/NetflixLogo1.webp" width="150" alt="" />
        <button
          onClick={togglePlayPause}
          className="absolute z-1 -bottom-8 -right-24  flex flex-row gap-2 font-medium font-gotham items-center justify-center px-7 py-3 rounded-full text-black bg-white"
        >
          <span>Audio</span>
          <img
            src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"}
            alt=""
          />
        </button>
        {isPlaying ? (
          <button
            className="absolute z-1 -bottom-4 -right-36 transition-transform ease-linear duration-700"
            onClick={() => {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
              setIsPlaying(true);
            }}
          >
            <img src="/svg/retry.svg" width={20} alt="" />
            {""}
          </button>
        ) : null}
      </div>
      <div className=" flex flex-col max-w-[450px] gap-y-5">
        <span className="uppercase font-bold text-2xl font-gotham">
          Modèle Economique
        </span>
        <p className="text-justify font-gotham text-zinc-400">
          Netflix est un service de streaming vidéo par abonnement offrant une
          vaste gamme de films, séries télévisées et autres contenus originaux
          et sous licence. Son modèle économique repose sur des abonnements
          mensuels, offrant différents niveaux d'accès en fonction du prix. En
          plus de cela, Netflix génère des revenus grâce à ses productions
          originales, à la publicité et à des partenariats de contenu.
        </p>
        <a href="#" className="flex flex-row items-center gap-3 group">
          En savoir
          <img
            src="/svg/right.svg"
            className="group-hover:ml-2  transition-all ease-in duration-150 "
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Modeleconomique;
